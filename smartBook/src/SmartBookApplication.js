SmartBookApplication = function()
{

};

Ext.override(Ext.data.JsonWriter,
        {
            encode : false,
            render : function(params, baseParams, data)
            {
                if (this.encode === true)
                {
                    Ext.apply(params, baseParams);
                    params = Ext.encode(data);
                }
                else
                {
                    var jdata = Ext.apply({}, baseParams);
                    jdata = data;
                    params.jsonData = jdata;
                }
            }
        })
Ext.override(Ext.data.HttpProxy,
        {
            doRequest : function(action, rs, params, reader, cb, scope, arg)
            {
                var o = {
                    method: (this.api[action]) ? this.api[action]['method'] : undefined,
                    request: {
                        callback : cb,
                        scope : scope,
                        arg : arg,
                        headers : this.headers
                    },
                    reader: reader,
                    callback : this.createCallback(action, rs),
                    scope: this
                };

                // If possible, transmit data using jsonData || xmlData on Ext.Ajax.request (An installed DataWriter would have written it there.).
                // Use std HTTP params otherwise.
                if (params.jsonData)
                {
                    o.jsonData = params.jsonData;
                } else if (params.xmlData)
                {
                    o.xmlData = params.xmlData;
                }
                else
                {
                    o.params = params || {};
                }
                // Set the connection url.  If this.conn.url is not null here,
                // the user must have overridden the url during a beforewrite/beforeload event-handler.
                // this.conn.url is nullified after each request.
                this.conn.url = this.buildUrl(action, rs);

                if (this.useAjax)
                {

                    Ext.applyIf(o, this.conn);

                    // If a currently running request is found for this action, abort it.
                    if (this.activeRequest[action])
                    {
                        ////
                        // Disabled aborting activeRequest while implementing REST.  activeRequest[action] will have to become an array
                        // TODO ideas anyone?
                        //
                        //Ext.Ajax.abort(this.activeRequest[action]);
                    }
                    this.activeRequest[action] = Ext.Ajax.request(o);
                }
                else
                {
                    this.conn.request(o);
                }
                // request is sent, nullify the connection url in preparation for the next request
                this.conn.url = null;
            }
        })

SmartBookApplication.prototype =
{
    start : function()
    {
        var actionPanel = this.createActionPanel();
        this.centerPanel = new Ext.Panel({
            region: 'center',
            layout : 'fit'
        });
        this.mainView = new Ext.Viewport({
            layout: 'border',
            items: [
                {
                    region: 'north',
                    html: '<h1 class="x-panel-header">Smart book</h1>',
                    autoHeight: true,
                    border: false,
                    margins: '0 0 5 0'
                },
                {
                    region: 'west',
                    width: 200,
                    items: actionPanel
                },
                this.centerPanel
            ]
        });
    },

    createActionPanel : function()
    {
        return new ActionPanel(this);
    },

    actions : function()
    {
        return new Ext.Action({text: 'action1', itemId: 'idAction1'});
    },

    open : function(panelToAdd)
    {
        this.removeCenterPanelComponents();
        this.addToCenterPanel(panelToAdd);
    },

    //private
    addToCenterPanel : function(panelToAdd)
    {
        this.centerPanel.add(panelToAdd);
        this.centerPanel.doLayout();
    },

    //private
    removeCenterPanelComponents : function()
    {
        this.centerPanel.removeAll(true);
    }
};

Ext.onReady(function()
{
    new SmartBookApplication().start();
});
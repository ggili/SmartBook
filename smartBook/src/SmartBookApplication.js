SmartBookApplication = function()
{

};

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
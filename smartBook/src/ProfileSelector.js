ProfileSelector = Ext.extend(Ext.util.Observable, {

    constructor : function()
    {
        this.addEvents("profileselected");

        this.createSmartFormComponent();
    },

    getView : function()
    {
        return this.profileSelector;
    },

    createSmartFormComponent : function()
    {
        this.profileSelector = new Ext.form.FormPanel({
            title: 'Smart advice',
            frame: true,
            items:[
                {
                    xtype: 'combo',
                    width: 300,
                    name: 'profile',
                    fieldLabel: 'Profile',
                    typeAhead: true,
                    triggerAction: 'all',
                    lazyRender:true,
                    mode: 'remote',
                    store: new Ext.data.Store({
                        proxy: new PlainBodyHttpProxy({
                            api: {
                                load: {url: '/profiles/view.do'},
                                read: {url: '/profiles/view.do'}
                            }
                        }),
                        reader: new Ext.data.JsonReader({
                            idProperty: 'id',
                            totalProperty: 'total',
                            successProperty: 'success',
                            root: 'data',
                            fields: [
                                {name: 'id', mapping: 'id'},
                                {name: 'name', mapping: 'name'}
                            ]
                        })
                    }),
                    valueField: 'id',
                    displayField: 'name',
                    listeners :
                    {
                        scope : this,
                        select : function(combo, record, index)
                        {
                            this.fireEvent("profileselected", record);
                        }
                    }
                }
            ]
        });
    }
});
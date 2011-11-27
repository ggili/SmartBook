ProfilesGridComponent = Ext.extend(Ext.util.Observable, {

    constructor : function()
    {
        this.createProfilesGrid();
        this.addEvents('new');
    },

    getView : function()
    {
        return this.grid;
    },

    createProfilesGrid : function()
    {
        var myReader = new Ext.data.JsonReader({
            idProperty: 'id',
            root: 'data',
            totalProperty: 'total',
            successProperty: 'success',
            fields: [
                {name: 'name', mapping: 'name'},
                {name: 'description', mapping: 'description'},
                {name: 'categories', mapping: 'categories'},
                {name: 'id', mapping: 'id'}
            ]
        });

        var myWriter = new PlainJsonWriter({
            writeAllFields: true
        });

        this.grid = new Ext.grid.GridPanel({
                    store: new Ext.data.Store({
                        autoDestroy: true,
                        autoSave: true,
                        reader: myReader,
                        writer: myWriter,
                        proxy : new PlainBodyHttpProxy({headers: { 'Content-Type': 'application/json' }, api:{
                            load: {url: '/profiles/view.do'},
                            read: {url: '/profiles/view.do'},
                            destroy: {url: '/profiles/remove.do'}
                        }})
                    }),
                    colModel: new Ext.grid.ColumnModel({
                        defaults: {
                            width: 200,
                            sortable: true
                        },
                        columns: [
                            {header: 'Profile Name', dataIndex: 'name', editor: new Ext.form.TextField(), allowBlank: false},
                            {header: 'Description', dataIndex: 'description', editor: new Ext.form.TextField(), allowBlank: false},
                            {header: 'Categories', dataIndex: 'categories', hidden: true},
                            {header: 'Id', dataIndex: 'id', hidden: true}
                        ]
                    }),
                    selModel: new Ext.grid.RowSelectionModel({
                        singleSelect: true
                    }),
                    tbar: new Ext.Toolbar({
                        items:[
                            {
                                xtype: 'button',
                                text: 'New Profile',
                                handler: this.newProfile,
                                scope: this
                            },
                            {
                                xtype: 'button',
                                text: 'Delete Profile',
                                handler: this.deleteProfile,
                                scope: this
                            }
                        ]
                    }),
                    height: 200
                }
        );
        this.grid.getStore().load();
    },

    newProfile : function()
    {
        this.fireEvent('new', this);
    },

    deleteProfile : function()
    {
        var selectionModel = this.grid.getSelectionModel();
        if (selectionModel.hasSelection())
        {
            var record = selectionModel.getSelected();
            this.grid.getStore().remove(record);
        }
    }

});
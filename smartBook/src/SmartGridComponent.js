SmartGridComponent = Ext.extend(Object, {

    constructor : function()
    {
        this.createSmartGridComponent();
    },

    getView : function()
    {
        return this.smartGrid;
    },

    createSmartGridComponent : function()
    {
        var myReader = new Ext.data.JsonReader({
            totalProperty: 'total',
            successProperty: 'success',
            root: 'data',
            idProperty: 'id',
            fields: [
                {name: 'title', mapping: 'title'},
                {name: 'percent', mapping: 'percent'}
            ]
        });

        this.smartGrid = new Ext.grid.GridPanel(
        {
            store: new Ext.data.Store({
                reader: myReader,
                proxy: new PlainBodyHttpProxy({
                    headers: { 'Content-Type': 'application/json' },
                    api:{
                            load: {url: '/smartadvice/advice.do'},
                            read: {url: '/smartadvice/advice.do'}
                        }})
            }),
            colModel: new Ext.grid.ColumnModel({
                defaults:
                {
                    width: 250,
                    sortable: true
                },
                columns: [
                    {header: 'Title', dataIndex: 'title', width : 700},
                    {header: 'Percent matching', dataIndex: 'percent'}
                ]
            }),
            selModel: new Ext.grid.RowSelectionModel({
                singleSelect: true
            }),
            height: 300
        });
    }
});
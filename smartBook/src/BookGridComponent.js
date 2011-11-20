BookGridComponent = function()
{

};

BookGridComponent.prototype =
{
    createBookGrid : function()
    {
        var myReader = new Ext.data.JsonReader({
            idProperty: 'id',
            root: 'data',
            totalProperty: 'total',
            successProperty: 'success',
            fields: [
                {name: 'title', mapping: 'title'},
                {name: 'author', mapping: 'author'},
                {name: 'isbn', mapping: 'isbn'},
                {name: 'publisher', mapping: 'publisher'},
                {name: 'publishYear', mapping: 'publishYear'}
            ]
        });

        var myWriter = new Ext.data.JsonWriter({
            writeAllFields: true
        });

        this.rowEditor = new Ext.ux.grid.RowEditor({saveText :'Update'});
        this.rowEditor.on("afteredit", function(changes, s, record)
        {
            record.commit();
        }, this);

        this.grid = new Ext.grid.GridPanel({
                    store: new Ext.data.Store({
                        autoDestroy: true,
                        autoSave: true,
                        reader: myReader,
                        writer: myWriter,
                        proxy : new Ext.data.HttpProxy({headers: { 'Content-Type': 'application/json' }, api:{
                            load: {url: '/books/view.do'},
                            read: {url: '/books/view.do'},
                            create: {url: '/books/save.do'},
                            update: {url: '/books/save.do'},
                            destroy: {url: '/books/remove.do'}
                        }})
                    }),
                    plugins: [this.rowEditor],
                    colModel: new Ext.grid.ColumnModel({
                        defaults: {
                            width: 120,
                            sortable: true
                        },
                        columns: [
                            {header: 'Title', dataIndex: 'title', editor: new Ext.form.TextField(), allowBlank: false},
                            {header: 'Author', dataIndex: 'author', editor: new Ext.form.TextField(), allowBlank: false},
                            {header: 'Isbn', dataIndex: 'isbn', editor: new Ext.form.TextField(), allowBlank: false},
                            {header: 'Publisher', dataIndex: 'publisher', editor: new Ext.form.TextField(), allowBlank: false},
                            {header: 'Publish Year', dataIndex: 'publishYear', editor: new Ext.form.TextField(), allowBlank: false}
                        ]
                    }),
                    tbar: new Ext.Toolbar({
                        items:[
                            {
                                xtype: 'button',
                                text: 'Add Book',
                                handler: this.addBook,
                                scope: this
                            },
                            {
                                xtype: 'button',
                                text: 'Remove Book',
                                handler: this.removeBook,
                                scope: this
                            }
                        ]
                    })
                }
        );

        this.grid.getStore().load();

        return this.grid;
    },

    removeBook : function()
    {
        this.stopEditing();
        var selectionModel = this.grid.getSelectionModel();
        if (selectionModel.hasSelection())
        {
            var records = selectionModel.getSelections();
            for (var key in records)
            {
                var record = records[key];
                if (records.hasOwnProperty(key))
                {
                    this.grid.getStore().remove(record);
                }
            }
        }
        else
        {
            Ext.Msg.alert('ERROR', 'No record was selected.');
        }
    },

    addBook : function()
    {
        var Book = Ext.data.Record.create([
            {name: 'title'},
            {name: 'author'},
            {name: 'isbn'},
            {name: 'publisher'},
            {name: 'publishYear'}
        ]);

        var newBook = new Book({
            title: 'newTitle',
            author: 'newAuthor',
            isbn: 'newIsbn',
            publisher: 'newPublisher',
            publishYear: '2012'
        });

        this.stopEditing();
        this.grid.getStore().insert(0, newBook);
        newBook.commit();
        this.grid.getView().refresh();
        this.grid.getSelectionModel().selectRow(0);
        this.startEditing(0);
    },

    stopEditing : function()
    {
        this.rowEditor.stopEditing(false);
    },

    startEditing : function(rowIndex)
    {
        this.rowEditor.startEditing(rowIndex, true);
    }
};
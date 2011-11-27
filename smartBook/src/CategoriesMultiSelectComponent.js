CategoriesMultiSelectComponent = Ext.extend(Object, {

    constructor : function(config)
    {
        CategoriesMultiSelectComponent.superclass.constructor.call(this, config);
        this.createMultiSelectWidget(config.booksGrid);

    },

    getView : function()
    {
        return this.categoryMultiSelect;
    },

    createMultiSelectWidget : function(booksGrid)
    {
        this.booksGrid = booksGrid;
        var categoryJsonReader = new Ext.data.JsonReader({
            idProperty: 'id',
            root: 'data',
            successProperty: 'success',
            totalProperty: 'total',
            fields: [
                {name: 'id', mapping: 'id'},
                {name: 'name', mapping: 'name'}]
        });

        var store = new Ext.data.Store({
            reader: categoryJsonReader,
            proxy: new Ext.data.HttpProxy({
                api: {
                    load: {url: '/books/viewCategories.do'},
                    read: {url: '/books/viewCategories.do'}
                }
            })
        });

        this.categoryMultiSelect = new Ext.ux.form.MultiSelect({
            ddReorder: true,
            width: 500,
            height: 500,
            displayField: 'name',
            valueField: 'name',
            store: store,
            tbar: new Ext.Toolbar({
                items: [
                    {
                        text: 'Apply',
                        handler: function()
                        {
                            Ext.Ajax.request({
                                url: '/books/assignBookToCategories.do',
                                params: {categories: this.categoryMultiSelect.getRawValue(), bookId: this.booksGrid.getSelectionModel().getSelected().id},
                                success: function(response, opts)
                                {
                                    this.booksGrid.getStore().load();
                                },
                                scope: this
                            });
                        },
                        scope: this
                    }]
            })
        });

        store.load();
    }
});
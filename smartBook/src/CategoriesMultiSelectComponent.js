CategoriesMultiSelectComponent = Ext.extend(Object, {

    createMultiSelectWidget : function(selectionModel)
    {
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
                                params: {categories: this.categoryMultiSelect.getRawValue(), bookId: selectionModel.getSelected().id}
                            });
                        },
                        scope: this
                    }]
            })
        });

        store.load();

        return this.categoryMultiSelect;
    }
});
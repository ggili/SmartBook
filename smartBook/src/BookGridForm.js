BookGridForm = function(bookGridComponent, smartBookApplication)
{
    this.booksGrid = bookGridComponent.getView();
    this.smartBookApplication = smartBookApplication;

    this.createGridForm();
};

BookGridForm.prototype =
{
    getView : function()
    {
        return this.gridForm;
    },

    createGridForm : function()
    {

        this.categoryMultiSelect = new CategoriesMultiSelectComponent({booksGrid : this.booksGrid}).getView();

        this.attachEvents();

        this.gridForm = new Ext.FormPanel({
            id: 'book-grid-form',
            frame: true,
            title: 'Book manager',
            width: 750,
            layout: 'column',
            items:[
                {
                    columnWidth: .7,
                    layout: 'fit',
                    height: 500,
                    items: this.booksGrid
                },
                {
                    columnWidth: .3,
                    title:'Book categories',
                    autoHeight: true,
                    items: this.categoryMultiSelect
                }
            ]
        });
    },

    attachEvents : function()
    {
        this.booksGrid.getSelectionModel().on('selectionchange', function(selectionModel)
        {
            var categories = "";
            if (selectionModel.hasSelection())
            {
                categories = selectionModel.getSelected().get('categoriesString');
            }
            this.categoryMultiSelect.setValue(categories);
        }, this);
    }
};
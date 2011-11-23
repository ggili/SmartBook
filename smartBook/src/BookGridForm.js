BookGridForm = function(bookGridComponent, smartBookApplication)
{
    this.bookGridComponent = bookGridComponent;
    this.smartBookApplication = smartBookApplication;
};

BookGridForm.prototype =
{
    createGridForm : function()
    {
        this.booksGrid = this.bookGridComponent.createBookGrid();
        this.categoryMultiSelect = new CategoriesMultiSelectComponent().createMultiSelectWidget(this.booksGrid);

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

        return this.gridForm;
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
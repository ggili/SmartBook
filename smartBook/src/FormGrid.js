FormGrid = Ext.extend(Object, {

    constructor : function(smartFormComponent, smartGridComponent)
    {
        this.createFormGrid(smartFormComponent, smartGridComponent);
    },

    getView : function()
    {
        return this.formGrid;
    },

    createFormGrid : function(smartFormComponent, smartGridComponent)
    {
        this.smartForm = smartFormComponent.getView();
        this.smartGrid = smartGridComponent.getView();

        this.formGrid = new Ext.Container({
            layout: 'border',
            items:[
                {
                    region: 'north',
                    layout: 'fit',
                    height: 100,
                    items: this.smartForm
                },
                {
                    region: 'center',
                    layout: 'fit',
                    items: this.smartGrid
                }]
        });
    }

})
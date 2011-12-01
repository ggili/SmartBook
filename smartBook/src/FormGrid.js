FormGrid = Ext.extend(Object, {

    constructor : function(profileSelector, smartGridComponent)
    {
        this.createFormGrid(profileSelector, smartGridComponent);

        this.attachControlling();
    },

    getView : function()
    {
        return this.formGrid;
    },

    attachControlling : function()
    {
        this.profileSelector.on("profileselected", function(record)
        {

        }, this);
    },


    createFormGrid : function(profileSelector, gridComponent)
    {
        this.profileSelector = profileSelector.getView();
        this.smartGrid = gridComponent.getView();

        this.formGrid = new Ext.Container({
            layout: 'border',
            items:[
                {
                    region: 'north',
                    layout: 'fit',
                    height: 100,
                    items: this.profileSelector
                },
                {
                    region: 'center',
                    layout: 'fit',
                    items: this.smartGrid
                }
            ]
        });
    }

});
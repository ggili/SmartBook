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
            var profile = record.id;

            this.smartGrid.getStore().load({params :{jsonData : profile}});

        }, this);
    },


    createFormGrid : function(profileSelector, gridComponent)
    {
        this.profileSelector = profileSelector;
        this.profileSelectorView = profileSelector.getView();
        this.smartGrid = gridComponent.getView();

        this.formGrid = new Ext.Container({
            layout: 'border',
            items:[
                {
                    region: 'north',
                    layout: 'fit',
                    height: 100,
                    items: this.profileSelectorView
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
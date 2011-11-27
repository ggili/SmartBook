ProfilesGridForm = function(profilesGridComponent, profilesFormComponent)
{
    this.profilesGridComponent = profilesGridComponent;
    this.profilesFormComponent = profilesFormComponent;

    this.createGridForm();

};

ProfilesGridForm.prototype =
{
    getView : function()
    {
        return this.gridForm;
    },

    createGridForm : function()
    {
        this.profilesGrid = this.profilesGridComponent.getView();
        this.profilesForm = this.profilesFormComponent.getView();

        this.attachEvents();

        this.gridForm = new Ext.Container({
            layout: 'border',
            items: [
                {
                    region: 'north',
                    height: 200,
                    layout: 'fit',
                    items: this.profilesGrid
                },
                {
                    region: 'center',
                    layout: 'fit',
                    items: this.profilesForm
                }
            ]
        });
    },

    attachEvents : function()
    {
        this.profilesFormComponent.on('savesuccess', function()
        {
            this.profilesGrid.getStore().load();
        }, this);


        this.profilesGrid.getSelectionModel().on('selectionChange', function(selectionModel)
        {
            if (selectionModel.hasSelection())
            {
                this.profilesForm.getForm().loadRecord(selectionModel.getSelected());
            }
            else
            {
                this.profilesFormComponent.reset();
            }
        }, this);

        this.profilesGridComponent.on('new', function()
        {
            this.profilesFormComponent.reset();
        }, this);
    }

};
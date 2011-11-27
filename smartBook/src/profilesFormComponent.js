ProfilesFormComponent = Ext.extend(Ext.util.Observable, {

    constructor : function(categories)
    {
        ProfilesFormComponent.superclass.constructor.call(this);
        this.createProfilesForm(categories);
        this.addEvents(
                'savesuccess'
        );
    },

    getView : function()
    {
        return this.profilesForm;
    },

    createProfilesForm : function(categories)
    {
        this.checkBoxGroup = this.createCheckBoxGroup(categories);

        this.profilesForm = new Ext.form.FormPanel({
            title: 'Profile',
            frame: true,
            items: [
                {
                    xtype: 'textfield',
                    width: 300,
                    name: 'name',
                    fieldLabel: 'Name'
                },
                {
                    xtype: 'textarea',
                    width: 300,
                    name: 'description',
                    fieldLabel: 'Description'
                },
                {
                    items: this.checkBoxGroup,
                    width: 500,
                    fieldLabel: 'Categories',
                    name: 'categories'
                },
                {
                    xtype: 'hidden',
                    name: 'id'
                }
            ],
            tbar: new Ext.Toolbar({
                items: [
                    {
                        text: 'Save/Update',
                        handler: this.saveProfile,
                        scope: this
                    }
                ]
            })
        });
    },

    createCheckBoxGroup : function(categories)
    {
        var items = this.createCheckBoxGroupItems(categories);
        var checkBoxGroup = new CategoryCheckBoxGroup({
            id: 'categories',
            xtype: 'checkboxgroup',
            fieldLabel: 'Categories',
            columns: 3,
            items: items
        });

        return checkBoxGroup;
    },

    createCheckBoxGroupItems : function(categories)
    {
        var items = [];
        for (var index = 0; index < categories.length; index ++)
        {
            var category = categories[index];
            var categoryCheckBox = {boxLabel: category.name, name: category.name, id: category.id};
            items[index] = categoryCheckBox;
        }

        return items;
    },

    saveProfile : function()
    {
        var values = this.profilesForm.getForm().getFieldValues();

        new ProfileService().saveProfile(values, {onSuccess : function()
        {
            this.fireEvent('savesuccess', this);
        }, scope: this
        });
    },

    reset : function()
    {
        this.profilesForm.getForm().reset();
    }

});

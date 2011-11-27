ActionPanel = function(smartBookApplication)
{
    var root = new Ext.tree.TreeNode('SmartBook Actions');
    this.makeNavigableActions(root, smartBookApplication);
    ActionPanel.superclass.constructor.call(this, {root: root});

};

Ext.extend(ActionPanel, Ext.tree.TreePanel, {

    makeNavigableActions : function(root, smartBookApplication)
    {
        var treeNode = new Ext.tree.TreeNode({
            text: 'Manage books'
        });
        treeNode.on('click', function()
        {
            // grid on the left and form on the right
            var bookGridComponent = new BookGridComponent();
            var booksGridFormComponent = new BookGridForm(bookGridComponent, smartBookApplication);
            smartBookApplication.open(booksGridFormComponent.getView());
        });


        var treeNode2 = new Ext.tree.TreeNode({
            text: 'Manage profiles'
        });
        treeNode2.on('click', function()
        {
            // a grid on the top and a form on the bottom
            new CategoryService().viewCategories({
                onSuccess : function(decodedResponse)
                {
                    var profilesGridComponent = new ProfilesGridComponent();
                    var profilesFormComponent = new ProfilesFormComponent(decodedResponse.data);
                    var profilesGridForm = new ProfilesGridForm(profilesGridComponent, profilesFormComponent);
                    smartBookApplication.open(profilesGridForm.getView());
                },
                scope: this
            });
        });
        root.appendChild(treeNode);
        root.appendChild(treeNode2);
    }

});
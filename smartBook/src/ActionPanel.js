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
            var bookGridComponent = new BookGridComponent();
            var booksGridFormComponent = new BookGridForm(bookGridComponent, smartBookApplication);
            var booksGridForm = booksGridFormComponent.createGridForm();
            smartBookApplication.open(booksGridForm);
        });


        var treeNode2 = new Ext.tree.TreeNode({
            text: 'Manage users'
        });
        treeNode2.on('click', function()
        {
            var booksGrid = new BookGridComponent().createBookGrid();
            smartBookApplication.open(booksGrid);
        });
        root.appendChild(treeNode);
        root.appendChild(treeNode2);
    }

});
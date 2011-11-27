CategoryService = Ext.extend(Service, {

    viewCategories : function(callback)
    {
        var url = '/books/viewCategories.do';
        this.callService(url, null, callback.onSuccess, callback.onFailure, callback.scope);
    },

    deleteAllCategories : function()
    {

    }

});
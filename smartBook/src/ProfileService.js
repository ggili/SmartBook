ProfileService = Ext.extend(Service, {

    saveProfile : function(params, callback)
    {
        var url = '/profiles/save.do';
        this.callService(url, params, callback.onSuccess, callback.onFailure, callback.scope);
    }
});
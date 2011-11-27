Service = Ext.extend(Object, {

    callService : function(url, params, success, failure, scope)
    {
        Ext.Ajax.request({
            url: url,
            params: Ext.encode(params),
            headers: {'Content-Type': 'application/json'},
            success: function(response, opts)
            {
                var decodedResponse = Ext.decode(response.responseText);
                success.call(scope, decodedResponse);
            },
            failure: function(response, opts)
            {
                if (failure != null)
                {
                    failure.call(scope, response);
                }
                else
                {
                    Ext.Msg.alert('Error', 'Service call failed: ' + response.statusText);
                }
            },
            scope: this
        });
    }
});
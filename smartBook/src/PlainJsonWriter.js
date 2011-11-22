PlainJsonWriter = function(config)
{
    PlainJsonWriter.superclass.constructor.call(this, config);
};

Ext.extend(PlainJsonWriter, Ext.data.JsonWriter, {
    encode : false,

    render : function(params, baseParams, data)
    {
        if (this.encode === true)
        {
            Ext.apply(params, baseParams);
            params = Ext.encode(data);
        }
        else
        {
            var jdata = Ext.apply({}, baseParams);
            jdata = data;
            params.jsonData = jdata;
        }
    }
});
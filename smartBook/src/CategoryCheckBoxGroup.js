CategoryCheckBoxGroup = Ext.extend(Ext.form.CheckboxGroup, {

    setValue : function(values)
    {
        this.reset();
        if (this.rendered)
        {
            this.setCheckBoxValues(values);
        }
        else
        {
            this.buffered = true;
            this.value = values;
        }

        return this;
    },

    setCheckBoxValues : function(values)
    {
        var items = this.items;
        Ext.each(values, function(item)
        {
            items.get(item.id).setValue(true);
        });
    },

    getValue : function()
    {
        var out = [];
        this.eachItem(function(item)
        {
            if (item.checked)
            {
                out.push({id: item.getId(), name: item.getName()});
            }
        });

        return out;
    }
});
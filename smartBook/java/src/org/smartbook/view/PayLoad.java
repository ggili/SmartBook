package org.smartbook.view;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PayLoad
{
    private boolean success;

    private long total;

    private Object data;

    public PayLoad(boolean success)
    {
        this(success, 0, null);
    }

    public PayLoad(List<?> dataList)
    {
        this(true, dataList.size(), dataList);
    }

    public PayLoad(Object data)
    {
        this(true, 1, data);
    }

    public PayLoad(boolean success, long total, Object data)
    {
        this.success = success;
        this.total = total;
        this.data = data;
    }


    public boolean isSuccess()
    {
        return success;
    }

    public void setSuccess(boolean success)
    {
        this.success = success;
    }

    public long getTotal()
    {
        return total;
    }

    public void setTotal(long total)
    {
        this.total = total;
    }

    public Object getData()
    {
        return data;
    }

    public void setData(Object data)
    {
        this.data = data;
    }
}

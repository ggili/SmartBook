package org.smartbook.advice;

import org.smartbook.view.PayLoad;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SmartAdviceController
{
    @ResponseBody
    @RequestMapping("smartadvice/advice.do")
    public PayLoad adviceBooks(@RequestBody long profile)
    {
        return new PayLoad(true);
    }
}

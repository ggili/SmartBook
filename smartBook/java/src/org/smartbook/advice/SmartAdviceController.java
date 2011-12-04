package org.smartbook.advice;

import org.smartbook.model.Book;
import org.smartbook.view.PayLoad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class SmartAdviceController
{
    @Autowired
    private AdviceService adviceService;


    @ResponseBody
    @RequestMapping("smartadvice/advice.do")
    public PayLoad adviceBooks(@RequestBody Long profile)
    {
        final List<Advice> bookList = adviceService.adviceBooks(profile);

        return new PayLoad(bookList);
    }
}

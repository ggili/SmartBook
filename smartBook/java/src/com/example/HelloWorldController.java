package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class HelloWorldController
{
    @RequestMapping("/helloWorld.do")

    @ResponseBody
    public String helloWorld()
    {
        return "HELLO";
    }
}

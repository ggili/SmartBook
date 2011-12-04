package org.smartbook.advice;


import org.smartbook.model.Book;
import org.smartbook.service.BookService;
import org.smartbook.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.*;

@Service
public class AdviceServiceImpl implements AdviceService
{
    private SmartBookEngine engine;

    @Autowired
    private BookService bookService;

    @Autowired
    private ProfileService profileService;


    private SmartBookEngine engine()
    {
        engine = new SmartBookEngine(bookService.listBooks());

        return engine;
    }

    public List<Advice> adviceBooks(long profile)
    {
       return engine().adviceBooks(profileService.getProfile(profile));
    }
}

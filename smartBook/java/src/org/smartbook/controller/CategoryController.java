package org.smartbook.controller;

import org.smartbook.model.Category;
import org.smartbook.service.CategoryService;
import org.smartbook.view.PayLoad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class CategoryController
{
    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/books/viewCategories.do")
    @ResponseBody
    public PayLoad viewCategories()
    {
        final List<Category> categoryList = categoryService.listCategories();

        return new PayLoad(categoryList);
    }
}

package org.smartbook.controller;

import org.smartbook.model.Book;
import org.smartbook.service.BookService;
import org.smartbook.view.PayLoad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class BookController
{
    @Autowired
    private BookService bookService;

    @ResponseBody
    @RequestMapping(value = "/books/view.do")
    public PayLoad viewBooks()
    {
        final List<Book> bookList = bookService.listBooks();

        return new PayLoad(bookList);
    }

    @ResponseBody
    @RequestMapping(value = "/books/save.do")
    public PayLoad saveBook(@RequestBody Book book)
    {
        bookService.saveBook(book);

        return new PayLoad(book);
    }

    @RequestMapping(value = "/books/remove.do")
    @ResponseBody
    public PayLoad removeBook(@RequestBody Long bookId)
    {
        bookService.removeBook(bookId);

        return new PayLoad(true);
    }

    @RequestMapping(value = "/books/assignBookToCategories.do")
    @ResponseBody
    public PayLoad assignBookToCategories(@RequestParam String[] categories, @RequestParam Long bookId)
    {
//        bookService.assignBookToCategories(categoriesString);

        return new PayLoad(true);
    }
}

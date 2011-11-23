package org.smartbook.service;

import org.smartbook.dao.BookDAO;
import org.smartbook.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService
{
    @Autowired
    private BookDAO bookDAO;

    public void setBookDAO(BookDAO bookDAO)
    {
        this.bookDAO = bookDAO;
    }

    public List<Book> listBooks()
    {
        return bookDAO.listBooks();
    }

    public void saveBook(Book book)
    {
        bookDAO.saveBook(book);
    }

    public void removeBook(Long bookId)
    {
       bookDAO.removeBook(bookId);
    }

    public void assignBookToCategories(String[] categories, Long bookId)
    {
        bookDAO.assignBookToCategories(categories, bookId);
    }
}

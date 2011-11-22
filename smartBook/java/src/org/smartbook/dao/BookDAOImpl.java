package org.smartbook.dao;

import org.smartbook.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class BookDAOImpl implements BookDAO
{
    @Autowired
    private HibernateTemplate hibernateTemplate;

    @Transactional
    public List<Book> listBooks()
    {
        final List<Book> bookList = hibernateTemplate.find("from Book");

        return bookList;
    }

    @Transactional
    public Book saveBook(final Book book)
    {
        hibernateTemplate.saveOrUpdate(book);

        return book;
    }

    @Transactional
    public void removeBook(Long bookId)
    {
        Book bookToDelete = hibernateTemplate.load(Book.class, bookId);
        hibernateTemplate.delete(bookToDelete);
    }
}

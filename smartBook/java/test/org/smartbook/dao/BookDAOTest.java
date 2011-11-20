package org.smartbook.dao;

import org.junit.Before;
import org.junit.Test;
import org.smartbook.model.Book;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class BookDAOTest
{
    private BookDAO bookDAO;

    @Before
    public void setUp() throws Exception
    {
        ApplicationContext context =
                new ClassPathXmlApplicationContext(new String[]{"SpringBeansTest.xml"});
        bookDAO = context.getBean("bookDAO", BookDAO.class);
    }

    @Test
    public void testListBooks() throws Exception
    {
        List<Book> bookList = bookDAO.listBooks();
        assertNotNull(bookList);
    }

    @Test
    public void testCreateBook() throws Exception
    {
        Book book = new Book("title1", "author1", "isbn1", "publisher1", "2001");
        Book savedBook = bookDAO.saveBook(book);

        assertNotNull(savedBook.getId());
    }
}

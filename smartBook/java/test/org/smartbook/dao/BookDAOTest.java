package org.smartbook.dao;

import org.junit.Before;
import org.junit.Test;
import org.smartbook.model.Book;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

public class BookDAOTest
{
    private BookDAO bookDAO;

    private Book book = new Book("testTitle", "testAuthor", "testPublisher", "testPublishYear", "testIsbn");

    private Book book2 = new Book("testTitle2", "testAuthor2", "testPublisher2", "testPublishYear2", "testIsbn2");

    private Long bookId;

    private static final String[] CATEGORIES = {"java", "programming"};

    @Before
    public void setUp() throws Exception
    {
        ApplicationContext context =
                new ClassPathXmlApplicationContext(new String[]{"SpringBeansTest.xml"});
        bookDAO = context.getBean("bookDAO", BookDAO.class);
        // save 1 book in advance, to be able to delete
        Book savedBook = bookDAO.saveBook(book);
        bookId = savedBook.getId();
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
        Book savedBook = bookDAO.saveBook(book2);

        assertNotNull(savedBook.getId());
    }

    @Test
    public void testRemoveBook() throws Exception
    {
        if (bookId != null)
        {
            bookDAO.removeBook(bookId);
        }
        else
        {
            fail();
        }
    }

    @Test
    public void testAssignCategoriesToBook() throws Exception
    {
        if (bookId != null)
        {
            bookDAO.assignBookToCategories(CATEGORIES, bookId);
        }
        else
        {
            fail();
        }
    }
}

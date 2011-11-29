package org.smartbook.advice;


import jess.JessException;
import jess.Rete;
import org.junit.Test;
import org.smartbook.model.Book;
import org.smartbook.model.Category;
import org.smartbook.model.Profile;

import java.util.Arrays;


public class TestAdviceEngine
{
    private SmartBookEngine engine;

    private Profile profile;

    private Book makeDummyBook()
    {
        final Book book = new Book("Some book", "Some title", "some publisher", "a year", "ibn");
        final Category category = new Category(1L, "Java");
        final Category programming = new Category(2L, "Programming");
        book.addCategory(category);
        book.addCategory(programming);

        profile = new Profile("Java", "");
        profile.addCategory(category);
        return book;
    }

    @Test
    public void testSetup()
    {
        // Create a Jess rule engine
        engine = new SmartBookEngine(Arrays.asList(makeDummyBook()));
        engine.batch(Thread.currentThread().getContextClassLoader().getResource("org/smartbook/advice/smartBook.clp").getFile());
        engine.addObject(profile);
        engine.run();
    }

}

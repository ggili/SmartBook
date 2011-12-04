package org.smartbook.advice;


import org.junit.Assert;
import org.junit.Test;
import org.smartbook.model.Book;
import org.smartbook.model.Category;
import org.smartbook.model.Profile;

import java.util.Arrays;
import java.util.List;


public class TestAdviceEngine
{
    private SmartBookEngine engine;

    private Profile profile;

    private List<Book> makeDummyBook()
    {
        final Book book = new Book("Some book", "Some title", "some publisher", "a year", "ibn");
        final Category category = new Category(1L, "Java");
        final Category programming = new Category(2L, "Programming");
        book.addCategory(category);
        book.addCategory(programming);

        profile = new Profile("Java", "");
        profile.addCategory(category);

        Book book2 = new Book("A", "S", "a", "A", "S");
        return Arrays.asList(
                book,
                book2
        );
    }

    @Test
    public void testSetup()
    {
        // Create a Jess rule engine
        engine = new SmartBookEngine(makeDummyBook());

        final List<Advice> run = engine.adviceBooks(profile);
        Assert.assertNotNull(run);
        for (Advice advice : run)
        {
            System.out.println(advice);
        }
    }

}

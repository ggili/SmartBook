package org.smartbook.advice;


import jess.*;
import org.smartbook.model.Book;
import org.smartbook.model.Profile;

import java.util.Collections;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.List;

public class SmartBookEngine
{
    private final List<Book> books;

    private Rete rete;

    private WorkingMemoryMarker workingMemoryMarker;

    public SmartBookEngine(List<Book> books)
    {
        try
        {
            this.books = books;

            initReteEngine();
            batch(Thread.currentThread().getContextClassLoader().getResource("org/smartbook/advice/smartBook.clp").getFile());
        }
        catch (JessException e)
        {
            throw new SmartBookEngineException("Error initializing engine knowledge base", e);
        }
    }

    private void initReteEngine() throws JessException
    {
        rete = new Rete();

        rete.addAll(books);
        for (Book book : books)
        {
            rete.addAll(book.getCategories());
        }

        rete.reset();
        workingMemoryMarker = rete.mark();
    }

    private void batch(String file)
    {
        try
        {
            rete.batch(file);
        }
        catch (JessException e)
        {
            throw new SmartBookEngineException("Error guessing", e);
        }

    }

    public List<Advice> adviceBooks(Profile profile) throws SmartBookEngineException
    {
        try
        {
            rete.resetToMark(workingMemoryMarker);
            addObject(profile);
            rete.run();

             final Iterator<Advice> objects = rete.getObjects(new Filter.ByClass(Advice.class));

            return Collections.<Advice>list(new Enumeration<Advice>()
            {
                public boolean hasMoreElements()
                {
                    return objects.hasNext();
                }

                public Advice nextElement()
                {
                    return objects.next();
                }
            });

        }
        catch (JessException e)
        {
            throw new SmartBookEngineException("Error guessing", e);
        }
    }

    public void addObject(Object object)
    {
        try
        {
            rete.add(object);
        }
        catch (JessException e)
        {
            throw new SmartBookEngineException("Error guessing", e);
        }
    }
}

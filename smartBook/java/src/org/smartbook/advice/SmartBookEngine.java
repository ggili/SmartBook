package org.smartbook.advice;


import jess.*;
import org.smartbook.model.Book;

import java.util.Iterator;
import java.util.List;

public class SmartBookEngine
{
    private final List<Book> books;

    private Rete rete;

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
    }

    public void batch(String file)
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

    public void registerEvent(JessListener listener)
    {
        rete.addJessListener(listener);
        rete.setEventMask(rete.getEventMask() | JessEvent.DEFRULE_FIRED);
    }

    public <T> Iterator<T> run(Class<T> resultClass) throws SmartBookEngineException
    {
        try
        {
            rete.run();
            return rete.getObjects(new Filter.ByClass(resultClass));
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

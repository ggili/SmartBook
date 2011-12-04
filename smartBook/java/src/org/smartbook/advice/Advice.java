package org.smartbook.advice;


import org.smartbook.model.Book;
import org.smartbook.model.Category;

import java.util.List;

public class Advice
{
    private transient Book book;

    private double percent;


    public Advice(Book book, List<Category> categoryList)
    {
        this.book = book;
        this.percent = book.percentMatches(categoryList);
    }

    public String getTitle()
    {
        return book.getAuthor() + "-" + book.getTitle();
    }

    public double getPercent()
    {
        return percent;
    }

    @Override
    public String toString()
    {
        return "Advice{" +
                "book=" + book +
                ", percent=" + percent +
                '}';
    }
}

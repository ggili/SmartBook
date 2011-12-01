package org.smartbook.advice;


import org.smartbook.model.Book;
import org.smartbook.model.Category;

import java.util.List;

public class Advice
{
    private Book book;

    private double percent;


    public Advice(Book book, List<Category> categoryList)
    {
        this.book = book;
        this.percent = book.percentMatches(categoryList);
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

package org.smartbook.dao;

import org.smartbook.model.Book;

import java.util.List;


public interface BookDAO
{
    List<Book> listBooks();

    Book saveBook(Book book);

    void removeBook(Long bookId);

    void assignBookToCategories(String[] categories, Long bookId);
}

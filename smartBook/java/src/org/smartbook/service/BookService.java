package org.smartbook.service;

import org.smartbook.model.Book;

import java.util.List;

public interface BookService
{
    public List<Book> listBooks();

    public void saveBook(Book book);

    public void removeBook(Long bookId);

    public void assignBookToCategories(String[] categories, Long bookId);
}

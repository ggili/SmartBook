package org.smartbook.dao;

import org.hibernate.classic.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.smartbook.model.Book;
import org.smartbook.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BookDAOImpl implements BookDAO
{
    @Autowired
    private HibernateTemplate hibernateTemplate;

    @Transactional
    public List<Book> listBooks()
    {
        final List<Book> bookList = hibernateTemplate.find("from Book");

        return bookList;
    }

    @Transactional
    public Book saveBook(final Book book)
    {
        hibernateTemplate.saveOrUpdate(book);

        return book;
    }

    @Transactional
    public void removeBook(Long bookId)
    {
        Book bookToDelete = hibernateTemplate.load(Book.class, bookId);
        hibernateTemplate.delete(bookToDelete);
    }

    public void assignBookToCategories(String[] categories, Long bookId)
    {
        Book editedBook = hibernateTemplate.get(Book.class, bookId);
        hibernateTemplate.initialize(editedBook);
        List<Category> categoryList = new ArrayList<Category>();

        for (String categoryName : categories)
        {
            Category newCategoryToBook = (Category)hibernateTemplate.findByCriteria(DetachedCriteria.forClass(Category.class).add(Restrictions.eq("name", categoryName))).get(0);
            categoryList.add(newCategoryToBook);
        }

        editedBook.setCategories(categoryList);
        hibernateTemplate.saveOrUpdate(editedBook);
    }
}

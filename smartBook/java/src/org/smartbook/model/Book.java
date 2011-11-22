package org.smartbook.model;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "BOOK")
@SequenceGenerator(name = "seq", sequenceName = "s_book")
public class Book
{
    private static final String DELIMITER = ",";
    @Id
    @GeneratedValue(generator = "seq")
    @Column(name = "ID")
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "AUTHOR")
    private String author;

    @Column(name = "PUBLISHER")
    private String publisher;

    @Column(name = "PUBLISH_YEAR")
    private String publishYear;

    @Column(name = "ISBN")
    private String isbn;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "BOOK_CATEGORY", joinColumns = {@JoinColumn(name = "BOOK_ID")}, inverseJoinColumns = {@JoinColumn(name = "CATEGORY_ID")})
    private List<Category> categories;

    @Transient
    private String categoriesString;

    public Book()
    {
    }

    public Book(String title, String author, String publisher, String publishYear, String isbn)
    {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.publishYear = publishYear;
        this.isbn = isbn;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getAuthor()
    {
        return author;
    }

    public void setAuthor(String author)
    {
        this.author = author;
    }

    public String getPublisher()
    {
        return publisher;
    }

    public void setPublisher(String publisher)
    {
        this.publisher = publisher;
    }

    public String getPublishYear()
    {
        return publishYear;
    }

    public void setPublishYear(String publishYear)
    {
        this.publishYear = publishYear;
    }

    public String getIsbn()
    {
        return isbn;
    }

    public void setIsbn(String isbn)
    {
        this.isbn = isbn;
    }

    public Long getId()
    {
        return id;
    }

    public String getCategoriesString()
    {
        categoriesString = categoriesToString();

        return categoriesString;
    }

    public void setCategoriesString(String categoriesString)
    {
        this.categoriesString = categoriesString;
    }

    private String categoriesToString()
    {
        StringBuilder stringBuilder = new StringBuilder();
        for (Category category : categories)
        {
            stringBuilder.append(category.getName());
            stringBuilder.append(DELIMITER);
        }
        if (stringBuilder.length() > 0)
        {
            stringBuilder.deleteCharAt(stringBuilder.length() - 1);
        }

        return stringBuilder.toString();
    }
}

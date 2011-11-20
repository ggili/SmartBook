package org.smartbook.model;

import javax.persistence.*;


@Entity
@Table(name = "BOOK")
@SequenceGenerator(name = "seq", sequenceName = "s_book")
public class Book
{
    @Column(name = "TITLE")
    private String title;

    @Column(name = "AUTHOR")
    private String author;

    @Column(name = "PUBLISHER")
    private String publisher;

    @Column(name = "PUBLISH_YEAR")
    private String publishYear;

    @Id
    @GeneratedValue(generator = "seq")
    @Column(name = "ID")
    private Long id;

    @Column(name = "ISBN")
    private String isbn;

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
}

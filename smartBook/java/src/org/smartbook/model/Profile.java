package org.smartbook.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "PROFILE")
@SequenceGenerator(name = "seq", sequenceName = "s_book")
public class Profile
{
    @Id
    @GeneratedValue(generator = "seq")
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "PROFILE_CATEGORY", joinColumns = {@JoinColumn(name = "PROFILE_ID")}, inverseJoinColumns = {@JoinColumn(name = "CATEGORY_ID")})
    private List<Category> categories;

    public Profile()
    {

    }

    public Long getId()
    {
        return id;
    }

    public Profile(String name, String description)
    {
        this.name = name;
        this.description = description;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public List<Category> getCategories()
    {
        return categories;
    }

    public void setCategories(List<Category> categories)
    {
        this.categories = categories;
    }
}

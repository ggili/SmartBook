package org.smartbook.model;

import javax.persistence.*;

@Entity
@Table(name = "CATEGORY")
@SequenceGenerator(name = "seq", sequenceName = "s_book")
public class Category
{
    @Id
    @GeneratedValue(generator = "seq")
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME")
    private String name;

    public Category()
    {
    }

    public Category(Long id, String name)
    {
        this.id = id;
        this.name = name;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o)
        {
            return true;
        }
        if (o == null || getClass() != o.getClass())
        {
            return false;
        }

        Category category = (Category) o;

        if (id != null ? !id.equals(category.id) : category.id != null)
        {
            return false;
        }
        if (name != null ? !name.equals(category.name) : category.name != null)
        {
            return false;
        }

        return true;
    }

    @Override
    public int hashCode()
    {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}

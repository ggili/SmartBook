package org.smartbook.dao;

import org.smartbook.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class CategoryDAOImpl implements CategoryDAO
{
    @Autowired
    private HibernateTemplate hibernateTemplate;

    @Transactional
    public List<Category> listCategories()
    {
        return hibernateTemplate.find("from Category");
    }
}

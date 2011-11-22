package org.smartbook.service;

import org.smartbook.dao.CategoryDAO;
import org.smartbook.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService
{
    @Autowired
    private CategoryDAO categoryDAO;

    public List<Category> listCategories()
    {
        return categoryDAO.listCategories();
    }
}

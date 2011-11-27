package org.smartbook.dao;

import org.junit.Before;
import org.junit.Test;
import org.smartbook.model.Category;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

import static org.junit.Assert.assertNotNull;

public class CategoryDAOTest
{
    private CategoryDAO categoryDAO;

    @Before
    public void setUp() throws Exception
    {
        ApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"SpringBeansTest.xml"});
        categoryDAO = context.getBean("categoryDAO", CategoryDAO.class);
    }

    @Test
    public void testListCategories() throws Exception
    {
        List<Category> categoryList = categoryDAO.listCategories();
        assertNotNull(categoryList);
    }
}

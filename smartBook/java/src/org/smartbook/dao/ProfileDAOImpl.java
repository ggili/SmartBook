package org.smartbook.dao;

import org.smartbook.model.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class ProfileDAOImpl implements ProfileDAO
{
    @Autowired
    private HibernateTemplate hibernateTemplate;

    public List<Profile> listProfiles()
    {
        final List profileList = hibernateTemplate.find("from Profile");

        return profileList;
    }

    @Transactional
    public Profile saveProfile(Profile profile)
    {
        hibernateTemplate.saveOrUpdate(profile);

        return profile;
    }

    @Transactional
    public void deleteProfile(Long profileId)
    {
        final Profile profileToDelete = hibernateTemplate.load(Profile.class, profileId);

        hibernateTemplate.delete(profileToDelete);
    }

    public Profile findProfile(long profile)
    {
        return hibernateTemplate.get(Profile.class, profile);
    }
}

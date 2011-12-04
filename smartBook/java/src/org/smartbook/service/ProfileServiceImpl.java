package org.smartbook.service;

import org.smartbook.dao.ProfileDAO;
import org.smartbook.model.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileServiceImpl implements ProfileService
{
    @Autowired
    private ProfileDAO profileDAO;

    public List<Profile> listProfiles()
    {
        return profileDAO.listProfiles();
    }

    public Profile saveProfile(Profile profile)
    {
        return profileDAO.saveProfile(profile);
    }

    public void deleteProfile(Long profileId)
    {
        profileDAO.deleteProfile(profileId);
    }

    public Profile getProfile(long profile)
    {
        return profileDAO.findProfile(profile);
    }
}

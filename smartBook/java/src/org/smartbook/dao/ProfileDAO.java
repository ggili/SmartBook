package org.smartbook.dao;

import org.smartbook.model.Profile;

import java.util.List;

public interface ProfileDAO
{
    List<Profile> listProfiles();

    Profile saveProfile(Profile profile);

    void deleteProfile(Long profileId);
}

package org.smartbook.service;

import org.smartbook.model.Profile;

import java.util.List;

public interface ProfileService
{
    public List<Profile> listProfiles();

    public Profile saveProfile(Profile profile);

    public void deleteProfile(Long profileId);

    Profile getProfile(long profile);
}

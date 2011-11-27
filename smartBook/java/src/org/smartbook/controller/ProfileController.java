package org.smartbook.controller;

import org.smartbook.model.Profile;
import org.smartbook.service.ProfileService;
import org.smartbook.view.PayLoad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ProfileController
{
    @Autowired
    private ProfileService profileService;

    @ResponseBody
    @RequestMapping(value = "/profiles/view.do")
    public PayLoad viewProfiles()
    {
        final List<Profile> profileList = profileService.listProfiles();

        return new PayLoad(profileList);
    }

    @ResponseBody
    @RequestMapping(value = "/profiles/save.do")
    public PayLoad saveProfile(@RequestBody Profile profile)
    {
        Profile savedProfile = profileService.saveProfile(profile);

        return new PayLoad(savedProfile);
    }

    @ResponseBody
    @RequestMapping(value = "/profiles/remove.do")
    public PayLoad deleteProfile(@RequestBody Long profileId)
    {
        profileService.deleteProfile(profileId);

        return new PayLoad(true);
    }
}

import React from 'react';
import Banner from "./Banner/Banner";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <Banner />
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Profile;

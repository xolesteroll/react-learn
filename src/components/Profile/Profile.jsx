import React from 'react';
import Banner from "./Banner/Banner";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <Banner/>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost}
                   updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;

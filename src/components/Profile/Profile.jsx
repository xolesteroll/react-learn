import React from 'react'
import Banner from "./Banner/Banner"
import Posts from "./Posts/Posts"
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.profile}>
            <Banner image={props.profile.photos.large}/>
            <ProfileInfo profile={props.profile}/>
            <Posts store={props.store}/>
        </div>
    )
}

export default Profile

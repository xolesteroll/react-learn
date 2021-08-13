import React from 'react'
import Banner from "./Banner/Banner"
import Posts from "./Posts/Posts"
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Preloader from "../common/Preloader/Preloader";
import noImage from "../../assets/images/not_found.jpg"


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profile}>
            <Banner image={props.profile.photos.large ? props.profile.photos.large : noImage}/>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateProfileStatusText={props.updateProfileStatusText}
                         postProfileStatus={props.postProfileStatus}/>
            <Posts store={props.store}/>
        </div>
    )
}

export default Profile

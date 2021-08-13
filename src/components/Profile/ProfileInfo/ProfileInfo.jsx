import classes from "./ProfileInfo.module.css"
import * as React from "react"
import noPhotoImg from "../../../assets/images/not_found.jpg"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

        return (
            <div className="profile">
                <div className={classes.info}>
                    <div
                        className={classes.avatar}
                        style={{
                            backgroundImage:
                                `url(${props.profile.photos.small ? props.profile.photos.small : noPhotoImg})`,
                        }}
                    > </div>
                    <div className="data">
                        <div className="name">Name: <span className="nameValue">{props.profile.fullName}</span></div>
                        <ProfileStatus status={props.status} updateProfileStatusText={props.updateProfileStatusText} postProfileStatus={props.postProfileStatus}/>
                        <div className="lastname">Looking for a job: <span className="lastnameValue">{props.profile.lookingForAJob ? 'Yeaaaap' : 'Nooope'}</span></div>
                        <div className="lastname">Job preference: <span className="lastnameValue">{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Not added'}</span></div>
                    </div>
                </div>
            </div>
        )
}

export default ProfileInfo

import React from "react"
import classes from "./Users.module.css";
import userPhotoNotFound from "../../assets/images/not_found.jpg";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {

    return (<div className={classes.userBox} >
                <div className={classes.avatarAndFollow}>
                    <NavLink to={`/profile/${user.id}`}>
                        <div className={classes.avatar}>
                            <img
                                src={user.photos.small ? user.photos.small : userPhotoNotFound}
                                alt='user avatar'/>
                        </div>
                    </NavLink>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }} className={classes.followBtn}>Unfollow</button> :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                           follow(user.id)
                        }} className={classes.followBtn}>Follow</button>}

                </div>
                <div className={classes.userInfo}>
                    <div className={classes.userName}>
                        {user.name}
                    </div>
                    <div className={classes.userStatus}>
                        {user.status ? user.status : "No status"}
                    </div>
                    <div className={classes.userLocation}>
                        <div className={classes.userCity}>{"u.location.city"}</div>
                        <div className={classes.userCountry}>{"u.location.country"}</div>
                    </div>
                </div>
            </div>)

}

export default User
import React from "react"
import classes from "./Users.module.css";
import userPhotoNotFound from "../../assets/images/not_found.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    //
    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }
    return <div className={classes.usersWrapper}>
        {/*<div className={classes.pageNumWrapper}>*/}
        {/*    {pages.map(p => {*/}
        {/*        return <span*/}
        {/*            className={p === props.currentPage ? classes.selectedPage : classes.pageNum}*/}
        {/*            onClick={() => {onPageChanged(p)}}>{p}*/}
        {/*    </span>*/}
        {/*    })}*/}
        {/*</div>*/}
        {
            props.users.map(u => <div className={classes.userBox} key={u.id}>
                <div className={classes.avatarAndFollow}>
                    <NavLink to={`/profile/${u.id}`}>
                        <div className={classes.avatar}>
                            <img
                                src={u.photos.small ? u.photos.small : userPhotoNotFound}
                                alt='user avatar'/>
                        </div>
                    </NavLink>
                    {u.followed ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "3cd12ddf-9e97-4197-9a6e-c6dc930a318b"
                            }
                        })
                            .then(response => {
                                console.log(response)
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }

                            })
                            .catch(e => {
                                alert(e)
                            })

                    }} className={classes.followBtn}>Unfollow</button> :
                        <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "3cd12ddf-9e97-4197-9a6e-c6dc930a318b"
                            }
                        })
                            .then(response => {
                                console.log(response)
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            })
                            .catch(e => {
                                alert(e)
                            })
                    }} className={classes.followBtn}>Follow</button>}

                </div>
                <div className={classes.userInfo}>
                    <div className={classes.userName}>
                        {u.name}
                    </div>
                    <div className={classes.userStatus}>
                        {u.status ? u.status : "No status"}
                    </div>
                    <div className={classes.userLocation}>
                        <div className={classes.userCity}>{"u.location.city"}</div>
                        <div className={classes.userCountry}>{"u.location.country"}</div>
                    </div>
                </div>
            </div>)
        }
        <button onClick={() => {
            props.onPageChanged(props.currentPage + 1)
        }} className={classes.showMore}>Show More
        </button>
    </div>
}

export default Users
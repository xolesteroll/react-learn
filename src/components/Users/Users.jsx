import React from "react";
import classes from "./Users.module.css"
import axios from "axios";
import userPhotoNotFound from "../../assets/images/not_found.jpg"

class Users extends React.Component {

    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div className={classes.usersWrapper}>
            {
                this.props.users.map(u => <div className={classes.userBox} key={u.id}>
                    <div className={classes.avatarAndFollow}>
                        <div className={classes.avatar}>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhotoNotFound}
                                alt='user avatar'/>
                        </div>
                        {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }} className={classes.followBtn}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
                            }} className={classes.followBtn}>Follow</button>}

                    </div>
                    <div className={classes.userInfo}>
                        <div className={classes.userName}>
                            {u.name}
                        </div>
                        <div className={classes.userStatus}>
                            {u.status != null ? u.status : "No status"}
                        </div>
                        <div className={classes.userLocation}>
                            <div className={classes.userCity}>{"u.location.city"}</div>
                            <div className={classes.userCountry}>{"u.location.country"}</div>
                        </div>
                    </div>
                </div>)
            }
            <button className={classes.showMore}>Show More</button>
        </div>
    }

}

export default Users

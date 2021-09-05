import React from "react"
import classes from "./Users.module.css";
import User from "./User";

const Users = (props) => {

    return <div className={classes.usersWrapper}>

        {
            props.users.map(u => <User user={u}
                                       followingInProgress={props.followingInProgress}
                                       follow={props.follow}
                                       unfollow={props.unfollow}
                                       key={u.id}
            />)
        }
        <button onClick={() => {
            props.onPageChanged(props.currentPage + 1)
        }} className={classes.showMore}>Show More
        </button>
    </div>
}

export default Users
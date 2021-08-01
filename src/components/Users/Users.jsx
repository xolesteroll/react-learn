import React from "react";
import classes from "./Users.module.css"

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers( [
            {
                id: 1,
                imageUrl: 'https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_960_720.jpg',
                fullName: 'Anton',
                status: 'I am A BOSS',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: true
            },
            {
                id: 2,
                imageUrl: 'https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_960_720.jpg',
                fullName: 'vasya',
                status: 'I am A BOSSssssssss',
                location: {city: 'NYC', country: 'USA'},
                followed: false
            },
            {
                id: 3,
                imageUrl: 'https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_960_720.jpg',
                fullName: 'shmara',
                status: 'I am A BOSSsssssss',
                location: {city: 'Chisinau', country: 'MOLDOVA'},
                followed: true
            }
        ])
    }



    return <div className={classes.usersWrapper}>
        {
            props.users.map(u => <div className={classes.userBox} key={u.id}>
                <div className={classes.avatarAndFollow}>
                    <div className={classes.avatar}>
                        <img src={u.imageUrl} alt='user photo'/>
                    </div>
                    {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }} className={classes.followBtn}>Unfollow</button> :
                        <button onClick={() => {
                            props.follow(u.id)
                        }} className={classes.followBtn}>Follow</button>}

                </div>
                <div className={classes.userInfo}>
                    <div className={classes.userName}>
                        {u.fullName}
                    </div>
                    <div className={classes.userStatus}>
                        {u.status}
                    </div>
                    <div className={classes.userLocation}>
                        <div className={classes.userCity}>{u.location.city}</div>
                        <div className={classes.userCountry}>{u.location.country}</div>
                    </div>
                </div>
            </div>)
        }
        <button className={classes.showMore}>Show More</button>
    </div>

}

export default Users

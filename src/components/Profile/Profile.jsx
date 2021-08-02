import React from 'react'
import Banner from "./Banner/Banner"
import Posts from "./Posts/Posts"
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

class Profile extends React.Component {
    render() {
        return (
            <div className={classes.profile}>
                <Banner/>
                <ProfileInfo/>
                <Posts store={this.props.store}/>
            </div>
        )
    }
}

export default Profile

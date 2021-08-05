import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import myBigImage from "../../assets/images/maxresdefault.jpg"
import mySmallImage from "../../assets/images/f35c19d82353f23ebd371a8573fa1f3a.jpg"
import usersAPI from "../../dal/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId
        if (!userId) {
            this.props.setUserProfile({
                "aboutMe": "Да все заебись",
                "contacts": {
                    "facebook": "facebook.com",
                    "website": null,
                    "vk": "vk.com/dimych",
                    "twitter": "https://twitter.com/@sdf",
                    "instagram": "instagra.com/sds",
                    "youtube": null,
                    "github": "github.com",
                    "mainLink": null
                },
                "lookingForAJob": true,
                "lookingForAJobDescription": "Да ваще похуй, давай любую",
                "fullName": "Антоха",
                "userId": 99999,
                "photos": {
                    "small": mySmallImage,
                    "large": myBigImage
                }
            })
        } else {
            usersAPI.getUserProfile(userId)
                .then(response => {
                    this.props.setUserProfile(response)
                })
        }

    }

    render() {
        return (
           <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {
    setUserProfile
})(withRouter(ProfileContainer))

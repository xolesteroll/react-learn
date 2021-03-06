import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    postProfileStatus,
    setUserProfile,
    updateProfileStatus,
    updateProfileStatusText
} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/redirectHocs/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    showProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
        }
        this.props.getUserProfile(userId)
        this.props.updateProfileStatus(userId)
    }


    componentDidMount() {
        this.showProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.showProfile()
        }
    }


    render() {


        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id
})

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfile,
        updateProfileStatus,
        updateProfileStatusText,
        postProfileStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

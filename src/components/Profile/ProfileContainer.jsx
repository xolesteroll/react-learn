import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    postProfileStatus,
    setUserProfile,
    updateProfileStatus,
    updateProfileStatusText
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 18797
        }
        this.props.getUserProfile(userId)
        this.props.updateProfileStatus(userId)
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

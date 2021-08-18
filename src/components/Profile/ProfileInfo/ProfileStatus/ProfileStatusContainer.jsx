import React from 'react';
import ProfileStatus from "./ProfileStatus";
import {connect} from "react-redux";
import {updateProfileStatus, postProfileStatus} from "../../../../redux/reducers/profileReducer";

class ProfileStatusContainer extends React.Component {

    componentDidMount() {
        if (!this.props.status) {
            this.props.updateProfileStatus(this.props.userId)
        }
    }

    render() {
        return (
            <ProfileStatus {...this.props} />
        );
    }
};

const mapStateToProps = (state) => ({
    status: state.profilePage.profile.status,
    userId: state.profilePage.profile.userId
})

export default connect(mapStateToProps, {
    postProfileStatus,
    updateProfileStatus
})(ProfileStatusContainer)
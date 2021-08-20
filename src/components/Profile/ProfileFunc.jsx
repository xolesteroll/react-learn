// import React, {useEffect, useState} from 'react';
// import Profile from "./Profile";
// import {compose} from "redux";
// import {connect} from "react-redux";
// import {
//     getUserProfile, postProfileStatus,
//     setUserProfile,
//     updateProfileStatus,
//     updateProfileStatusText
// } from "../../redux/reducers/profileReducer";
// import {withRouter} from "react-router-dom";
// import {withAuthRedirect} from "../../hoc/redirectHocs/withAuthRedirect";
//
// const ProfileFunc = (props) => {
//     debugger
//     let [userId, setUserId] = useState(props.match.params.userId)
//     console.log(userId)
//
//     useEffect( () => {
//         if (!userId) {
//             setUserId(props.authUserId)
//         }
//         props.getUserProfile(userId)
//         props.updateProfileStatus(userId)
//     }, [props.match.params.userId])
//
//
//
//     return (
//         <Profile {...props} />
//     );
// };
//
// const mapStateToProps = (state) => ({
//     profile: state.profilePage.profile,
//     status: state.profilePage.status,
//     authUserId: state.auth.id
// })
//
// export default compose(
//     connect(mapStateToProps, {
//         setUserProfile,
//         getUserProfile,
//         updateProfileStatus,
//         updateProfileStatusText,
//         postProfileStatus
//     }),
//     withRouter,
//     withAuthRedirect
// )(ProfileFunc)
//

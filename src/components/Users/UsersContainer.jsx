import {connect} from "react-redux";
import {
    changePage,
    follow, setFollowingInProgress, setIsFetching, setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import usersAPI from "../../dal/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(response => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(response.items)
                    this.props.setTotalUsersCount(response.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.changePage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
                   setFollowingInProgress={this.props.setFollowingInProgress}
            />

        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changePage,
    setTotalUsersCount,
    setIsFetching,
    setFollowingInProgress
})(UsersContainer)

import {connect} from "react-redux";
import {
    changePage, follow, requestUsers, setPageUsersAC, unfollow
} from "../../redux/reducers/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/redirectHocs/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/usersSelectors";
import Paginator from "../common/Paginator/Paginator";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.requestUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.changePage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    onPageUsersChanged = (pageNumber) => {
        this.props.changePage(pageNumber)
        this.props.setPageUsersAC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Paginator
                totalItemsCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                portionSize={10}
                onPageChanged={this.onPageUsersChanged}
            />
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />

        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        changePage,
        requestUsers,
        setPageUsersAC,
        unfollow,
        follow
    }),
    withAuthRedirect
)(UsersContainer)


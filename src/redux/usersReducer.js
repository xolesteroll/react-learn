import {usersAPI} from "../dal/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS :
            return {...state, users: [...state.users, ...action.users]}
        case CHANGE_PAGE :
            return {...state, currentPage: action.pageNumber}
        case SET_USERS_COUNT :
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case FOLLOWING_IN_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const changePage = (pageNumber) => ({type: CHANGE_PAGE, pageNumber})
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_COUNT, totalCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
        })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId))
    usersAPI.deleteFollow(userId)
        .then(response => {
            console.log(response)
            if (response === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(setFollowingInProgress(false, userId))

        })
        .catch(e => {
            alert(e)
            dispatch(setFollowingInProgress(false, userId))
        })
}

export const follow = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId))
    usersAPI.postFollow(userId)
        .then(response => {
            console.log(response)
            if (response === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(setFollowingInProgress(false, userId))
        })
        .catch(e => {
            alert(e)
            dispatch(setFollowingInProgress(false, userId))
        })
}



export default usersReducer
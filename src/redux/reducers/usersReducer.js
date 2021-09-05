import {usersAPI} from "../../dal/api";
import {actionMapHelper} from "../../utils/helpers";

const FOLLOW = '/users/FOLLOW'
const UNFOLLOW = '/users/UNFOLLOW'
const LOAD_MORE_USERS = '/users/LOAD_MORE_USERS'
const SET_PAGE_USERS = '/users/SET_PAGE_USERS'
const CHANGE_PAGE = '/users/CHANGE_PAGE'
const SET_USERS_COUNT = '/users/SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = '/users/TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = '/users/FOLLOWING_IN_PROGRESS'

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
                users: actionMapHelper(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW :
            return {
                ...state,
                users: actionMapHelper(state.users, action.userId, "id", {followed: false})
            }
        case LOAD_MORE_USERS :
            return {...state, users: [...state.users, ...action.users]}
        case SET_PAGE_USERS :
            return {...state, users: [...action.users]}
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
export const loadMoreUsers = (users) => ({type: LOAD_MORE_USERS, users})
export const setPageUsers = (users) => ({type: SET_PAGE_USERS, users})
export const changePage = (pageNumber) => ({type: CHANGE_PAGE, pageNumber})
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_COUNT, totalCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true))

    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false))
    dispatch(loadMoreUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}


export const setPageUsersAC = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true))

    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setPageUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const unfollow = (userId) => async (dispatch) => {
    try {
        dispatch(setFollowingInProgress(true, userId))
        const response = await usersAPI.deleteFollow(userId)
        if (response === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(setFollowingInProgress(false, userId))
    } catch (e) {
        alert(e)
        dispatch(setFollowingInProgress(false, userId))
    }
}

export const follow = (userId) => async (dispatch) => {
    try {
        dispatch(setFollowingInProgress(true, userId))
        const response = await usersAPI.postFollow(userId)
        if (response === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(setFollowingInProgress(false, userId))
    } catch (e) {
        alert(e)
        dispatch(setFollowingInProgress(false, userId))
    }
}


export default usersReducer
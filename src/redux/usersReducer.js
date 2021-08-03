const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
export const changePageActionCreator = (pageNumber) => ({type: CHANGE_PAGE, pageNumber})
export const setTotalUsersCountActionCreator = (totalCount) => ({type: SET_USERS_COUNT, totalCount})

export default usersReducer
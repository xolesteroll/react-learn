import {usersAPI} from "../../dal/api";

const ADD_POST = '/profile/ADD-POST'
const SET_USER_PROFILE = '/profile/SET_USER_PROFILE'
const UPDATE_PROFILE_STATUS_TEXT = '/profile/UPDATE_PROFILE_STATUS_TEXT'

let initialState = {
    posts: [
        {
            id: 1,
            message: "First",
            likeCount: 1
        },
        {
            id: 2,
            message: "Second Post",
            likeCount: 45
        },
        {
            id: 3,
            message: "Third Post",
            likeCount: 36
        },
        {
            id: 4,
            message: "Forth Post",
            likeCount: 789
        },
        {
            id: 5,
            message: "Fifth Post",
            likeCount: 16
        }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                posts: [{id: state.posts.length + 1, message: action.newPost, likeCount: 0}, ...state.posts]
            }
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        case UPDATE_PROFILE_STATUS_TEXT : {
            return {...state, status: action.status}
        }
        default :
            return state
    }

}

export const addPost = (newPost) => {
    return {
        type: ADD_POST,
        newPost
    }
}


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const updateProfileStatusText = (status) => ({type: UPDATE_PROFILE_STATUS_TEXT, status})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getUserProfile(userId)
    console.log(response)
    dispatch(setUserProfile(response))
}

export const updateProfileStatus = (userId) => async (dispatch) => {

    const response = await usersAPI.getProfileStatus(userId)
    dispatch(updateProfileStatusText(response.data))

}

export const postProfileStatus = (status) => async (dispatch) => {
    const response = await usersAPI.postProfileStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(updateProfileStatusText(status))
    }
}


export default profileReducer
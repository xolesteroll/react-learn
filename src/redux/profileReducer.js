import {usersAPI} from "../dal/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const UPDATE_PROFILE_STATUS_TEXT = 'UPDATE_PROFILE_STATUS_TEXT'

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
    status: "",
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.text
            }
        case ADD_POST :
            return {
                ...state,
                newPostText: '',
                posts: [{id: state.posts.length + 1, message: state.newPostText, likeCount: 0}, ...state.posts]
            }
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        case UPDATE_PROFILE_STATUS_TEXT : {
            return {...state, status:  action.status}
        }
        default :
            return state
    }

}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const updateProfileStatusText = (status) => ({type: UPDATE_PROFILE_STATUS_TEXT, status})

export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response))
        })
}

export const updateProfileStatus = (userId) => (dispatch) => {

    usersAPI.getProfileStatus(userId)
        .then(response => {
            dispatch(updateProfileStatusText(response.data))
        })

}

export const postProfileStatus = (status) => (dispatch) => {
    usersAPI.postProfileStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(updateProfileStatusText(status))
            }
        })
}


export default profileReducer
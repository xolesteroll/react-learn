const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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


export default profileReducer
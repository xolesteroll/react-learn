const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.text
            console.log(state.newPostText)
            return state
        default :
            return state
    }

}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}




export default profileReducer
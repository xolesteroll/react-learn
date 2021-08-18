import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";


let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            chats: [
                {
                    id: 1,
                    name: "John"
                },
                {
                    id: 2,
                    name: "Steve"
                },
                {
                    id: 3,
                    name: "Mohammad"
                },
                {
                    id: 4,
                    name: "Nevermore"
                },
                {
                    id: 5,
                    name: "Pudge"
                },
            ],
            messages: [[
                {
                    id: 1,
                    message: "Hello",
                    messageOut: false
                },
                {
                    id: 2,
                    message: "Hello my friend",
                    messageOut: true
                },
                {
                    id: 3,
                    message: "How Are you?",
                    messageOut: false
                },
                {
                    id: 4,
                    message: "I am okay, and you?",
                    messageOut: true
                },
                {
                    id: 5,
                    message: "I am ok",
                    messageOut: false
                },
                {
                    id: 6,
                    message: "Lets meet today somehow?",
                    messageOut: true
                },
                {
                    id: 7,
                    message: "Ok",
                    messageOut: false
                },
                {
                    id: 8,
                    message: "Ok",
                    messageOut: true
                },
                {
                    id: 9,
                    message: "Bye",
                    messageOut: true
                },
            ],
                [
                    {
                        id: 1,
                        message: "Hello",
                        messageOut: false
                    },
                    {
                        id: 2,
                        message: "Hello my friend",
                        messageOut: true
                    },
                    {
                        id: 3,
                        message: "How Are you?",
                        messageOut: false
                    },
                    {
                        id: 4,
                        message: "I am okay, and you?",
                        messageOut: true
                    },
                    {
                        id: 5,
                        message: "I am ok",
                        messageOut: false
                    },
                    {
                        id: 6,
                        message: "Ok",
                        messageOut: false
                    },
                    {
                        id: 7,
                        message: "Bye",
                        messageOut: true
                    },
                ],
                [
                    {
                        id: 1,
                        message: "Hello",
                        messageOut: false
                    },
                    {
                        id: 2,
                        message: "Hello my friend",
                        messageOut: true
                    },
                    {
                        id: 3,
                        message: "How Are you?",
                        messageOut: false
                    },
                    {
                        id: 4,
                        message: "Ok",
                        messageOut: false
                    },
                    {
                        id: 5,
                        message: "Ok",
                        messageOut: true
                    },
                    {
                        id: 6,
                        message: "Bye",
                        messageOut: true
                    },
                ]
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Roma',
                    imageUrl: 'https://pbs.twimg.com/profile_images/515757105140084736/rHu9s_8B_reasonably_small.jpeg'
                },
                {
                    id: 2,
                    name: 'Denis',
                    imageUrl: 'https://pbs.twimg.com/profile_images/515757105140084736/rHu9s_8B_reasonably_small.jpeg'
                },
                {
                    id: 3,
                    name: 'Artem',
                    imageUrl: 'https://pbs.twimg.com/profile_images/515757105140084736/rHu9s_8B_reasonably_small.jpeg'
                },
            ]
        }
    },
    _callSubscriber() {

    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}



window.store = store
export default store
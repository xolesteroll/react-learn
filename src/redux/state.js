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
            newPostText: 'it-kasutra'
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
            newMessageText: 'New Message'
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
    _callSubscriber()  {

    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'}

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: this._state.dialogsPage.messages[2].length + 1,
                message: this._state.dialogsPage.newMessageText,
                messageOut: true
            }

            this._state.dialogsPage.messages[2].push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            this._state.profilePage.newPostText = action.text
            console.log(this._state.profilePage.newPostText)
            this._callSubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.text
            console.log(this._state.dialogsPage.newMessageText)
            this._callSubscriber(this._state)
        }


    }
}

window.store = store
export default store
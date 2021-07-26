import {rerenderEntireTree} from "./render";

let state = {
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
        ]
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
        ]
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
}

export let addPost = (text) => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: text,
        likeCount: 0
    }
    console.log(state.profilePage.posts)
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state, addPost, sendMessage)
}

export let sendMessage = (text) => {
    let newMessage = {
        id: state.dialogsPage.messages[2].length + 1,
        message: text,
        messageOut: true
    }

    state.dialogsPage.messages[2].push(newMessage)
    console.log(state.dialogsPage.messages[2])
    rerenderEntireTree(state, addPost, sendMessage)
}



export default state
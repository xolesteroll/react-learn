import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
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

let chatsData = [
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
]

let messagesData = [[
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
            id: 7,
            message: "Ok",
            messageOut: false
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
    ]
]


ReactDOM.render(
    <React.StrictMode>
        <App posts={postsData} chats={chatsData} messages={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

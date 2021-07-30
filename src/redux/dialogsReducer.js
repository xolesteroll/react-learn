
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE :
            let newMessage = {
                id: state.messages[2].length + 1,
                message: state.newMessageText,
                messageOut: true
            }

            state.messages[2].push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT :
            state.newMessageText = action.text
            console.log(state.newMessageText)
            return state
        default :
            return state

    }

}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
}

export default dialogsReducer

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
    messages: [
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
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT :
            return {
                ...state,
                newMessageText: action.text
            }
        case SEND_MESSAGE :
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: state.newMessageText,
                    messageOut: true
                }]
            }
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

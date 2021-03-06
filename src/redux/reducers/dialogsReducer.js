const SEND_MESSAGE = '/dialogs/SEND-MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE :
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: action.newMessage,
                    messageOut: true
                }]
            }
        default :
            return state

    }

}

export const sendMessage = (newMessage) => {
    return {
        type: SEND_MESSAGE,
        newMessage
    }
}



export default dialogsReducer

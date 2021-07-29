
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


const dialogsReducer = (state, action) => {
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

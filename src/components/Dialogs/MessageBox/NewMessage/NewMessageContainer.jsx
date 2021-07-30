import {
    sendMessageCreator, updateNewMessageTextCreator
} from "../../../../redux/dialogsReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer
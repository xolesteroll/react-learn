import {
    sendMessage, updateNewMessageText
} from "../../../../redux/dialogsReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

const NewMessageContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText
})(NewMessage)

export default NewMessageContainer

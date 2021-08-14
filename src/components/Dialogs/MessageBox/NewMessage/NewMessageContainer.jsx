import {
    sendMessage, updateNewMessageText
} from "../../../../redux/dialogsReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";
import {clearForm} from "../../../../redux/formThunks";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

const NewMessageContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText,
    clearForm
})(NewMessage)

export default NewMessageContainer

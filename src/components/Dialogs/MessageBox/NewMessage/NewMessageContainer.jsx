import {
    sendMessage
} from "../../../../redux/reducers/dialogsReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";
import {clearForm} from "../../../../utils/formUtils";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

const NewMessageContainer = connect(mapStateToProps, {
    sendMessage,
    clearForm
})(NewMessage)

export default NewMessageContainer

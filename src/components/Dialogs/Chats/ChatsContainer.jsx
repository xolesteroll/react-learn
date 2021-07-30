
import {connect} from "react-redux";
import Chats from "./Chats";

const mapStateToProps = (state) => {
    return {
        chats: state.dialogsPage.chats
    }
}

const ChatsContainer = connect(mapStateToProps)(Chats)

export default ChatsContainer;

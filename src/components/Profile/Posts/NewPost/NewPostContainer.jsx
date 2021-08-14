import {
    addPost,
    updateNewPostText
} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {clearForm} from "../../../../redux/formThunks";


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}


const NewPostContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText,
    clearForm
})(NewPost)

export default NewPostContainer

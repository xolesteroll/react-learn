import {
    addPost,
    updateNewPostText
} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}


const NewPostContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(NewPost)

export default NewPostContainer

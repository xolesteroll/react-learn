import {
    addPostCreator,
    updateNewPostTextCreator
} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost() {
            dispatch(addPostCreator())
        },
        onPostChange(text) {
            dispatch(updateNewPostTextCreator(text))
        }
    }

}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer

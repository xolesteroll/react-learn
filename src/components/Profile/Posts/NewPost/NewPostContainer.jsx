import {
    addPost
} from "../../../../redux/reducers/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {clearForm, maxLength} from "../../../../utils/formUtils";


const mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps, {
    addPost,
    clearForm,
    maxLength
})(NewPost)

import {connect} from "react-redux";
import RecentPosts from "./RecentPosts";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const RecentPostsContainer = connect(mapStateToProps)(RecentPosts)

export default RecentPostsContainer;

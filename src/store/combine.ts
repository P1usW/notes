import {combineReducers} from "redux";
import postsReducer from "@src/store/posts/postsReducer";

const combine = combineReducers({
  posts: postsReducer
});

export default combine;
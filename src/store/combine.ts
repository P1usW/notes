import {combineReducers} from "redux";
import postsReducer from "@src/store/posts/postsReducer";
import userReducer from "./user/userReducer";

const combine = combineReducers({
  user: userReducer,
  posts: postsReducer
});

export default combine;
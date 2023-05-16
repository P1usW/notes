import {createSlice} from "@reduxjs/toolkit";
import {addPosts, clearPosts} from "@src/store/posts/postsActions";

interface Posts {
  username: string,
  content: string,
}

const initialState: Posts[] = [];

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addPosts, (state: Posts[]) => {
        return state
      })
      .addCase(clearPosts, (state: Posts[]) => {
        return state
      })
  }
});

export default postsReducer.reducer

import {createSlice} from "@reduxjs/toolkit";
import {addPosts, clearPosts} from "@src/store/posts/postsActions";

const initialState = []

// @ts-ignore
const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addPosts, (state, action) => {
        return 1
      })
      .addCase(clearPosts, (state, action) => {
        return 2
      })
  }
});

export default postsReducer
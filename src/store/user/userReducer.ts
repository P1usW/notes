import { createSlice } from "@reduxjs/toolkit";
import { delUser, setUser } from "./userActions";
import User from "@src/interface/user";


const initialState: User = {
  email: null,
  token: null,
  id: null
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setUser , (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.id = action.payload.id;
      }) 
      .addCase(delUser, () => {
        return initialState
      })
  }
});

export default userReducer.reducer;
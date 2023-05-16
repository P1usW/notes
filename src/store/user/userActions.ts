import { createAction } from "@reduxjs/toolkit";
import User from "@src/interface/user";

const setUser = createAction<User>('setUser');
const delUser = createAction('delUSer');

export {
  setUser,
  delUser
}
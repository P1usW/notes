import {createAction} from "@reduxjs/toolkit";

const addPosts = createAction('addProduct');
const clearPosts = createAction('resetProduct');

export {
    addPosts,
    clearPosts
}
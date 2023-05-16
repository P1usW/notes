import {configureStore} from "@reduxjs/toolkit";
import combine from "@src/store/combine";

const store = configureStore({
    reducer: combine,
    devTools: process.env.NODE_ENV !== 'production',
});

type StoreState = ReturnType<typeof store.getState>;
type StoreDispatch = typeof store.dispatch;

export default store

export type {
    StoreState,
    StoreDispatch
}
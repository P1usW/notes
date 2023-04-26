import {configureStore} from "@reduxjs/toolkit";
import combine from "@src/store/combine";

const store = configureStore({
    reducer: combine,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./index"

const store = configureStore({
    reducer: {
        counter: counterSlice
    },
});

export default store;
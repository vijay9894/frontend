import { configureStore } from "@reduxjs/toolkit";
import SocialSlice from './slices/SocialSlice.ts';
import MathSlice from './slices/MathSlice.ts'

export const store = configureStore({
    reducer: {
        Social : SocialSlice,
        Maths : MathSlice,
    },
});

export default store; 
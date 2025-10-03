import { configureStore } from "@reduxjs/toolkit";
import SocialSlice from './slices/SocialSlice.ts';
import MathSlice from './slices/MathSlice.ts'
import UserSlice from './slices/UserSlice.ts';

export const store = configureStore({
    reducer: {
        Social : SocialSlice,
        Maths : MathSlice,
        User : UserSlice
    },
});

export default store; 
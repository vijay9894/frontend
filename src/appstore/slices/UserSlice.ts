import { createSlice , type PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
}

interface UserState {
  isAuthenticated: boolean;
  userData: User | null;
}

const initialState: UserState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
  userData: localStorage.getItem('email')
    ? {  email: localStorage.getItem('email')! }
    : null,
};

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        login: (state , action: PayloadAction< User> ) => {
            state.isAuthenticated = true;
            state.userData = action.payload;
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('isAuthenticated', 'true');
            console.log("User logged in", action.payload);
        },
        logout :(state) =>{
            state.isAuthenticated = false;
            state.userData = null;
           localStorage.clear();
            console.log("User logged out");
        }
    }
})

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
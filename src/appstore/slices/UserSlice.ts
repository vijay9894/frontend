import { createSlice , type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  email: string;
}

interface UserState {
  isAuthenticated: boolean;
  userData: User | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  userData: null,
};

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        login: (state , action: PayloadAction< User> ) => {
            state.isAuthenticated = true;
            state.userData = action.payload;
            console.log("User logged in", action.payload);
        },
        logout :(state) =>{
            state.isAuthenticated = false;
            state.userData = null;
            console.log("User logged out");
        }
    }
})

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
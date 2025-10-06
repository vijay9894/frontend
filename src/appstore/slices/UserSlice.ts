import { createSlice , type PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  accessToken?: string;
  mode?: string;
}

interface UserState {
  isAuthenticated: boolean;
  userData: User | null;
   accessToken?: User['accessToken'];
   mode? : 'Light' | 'Dark' 
}

const initialState: UserState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
  userData: localStorage.getItem('email')
    ? {  email: localStorage.getItem('email')! }
    : null,
   accessToken: undefined,
   mode : (localStorage.getItem("mode") as "Light" | "Dark") || "Light"
};

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        login: (state , action: PayloadAction<User>) => {
            state.isAuthenticated = true;
            state.userData = action.payload;
            state.accessToken = action.payload.accessToken;
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('isAuthenticated', 'true');
            console.log("User logged in", action.payload);
        },
        setAccessToken : (state , action : PayloadAction<User>)=>{
            state.accessToken = action.payload.accessToken;
        },
        setDarkOrLightMode :(state , action : PayloadAction<{mode : 'Light' | 'Dark' }>)=>{
          console.log("action payload" , action.payload)
              state.mode = action.payload.mode;
              localStorage.setItem("mode" ,state.mode)
        },
        logout :(state) =>{
            state.isAuthenticated = false;
            state.userData = null;
           localStorage.clear();
            console.log("User logged out");
        }
    }
})

export const { login, logout , setAccessToken , setDarkOrLightMode} = UserSlice.actions;
export default UserSlice.reducer;
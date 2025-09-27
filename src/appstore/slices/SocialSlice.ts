import { createSlice } from "@reduxjs/toolkit";

const SocialSlice = createSlice({
    name: 'Social',
    initialState:{
        books:[]
    },
    reducers: {
       addSocialBook : (state: { books: string[] }, action: { payload: string }) => {
        console.log("add book function : " , action.payload)
        state.books.push(action.payload)
       },
       emptybook :(state:{books:string[]} , action:{payload:string})=>{
        state.books = [];
          console.log("after logout it is empty" , action.payload);
       }
    }
})

export const {addSocialBook , emptybook} = SocialSlice.actions
export default SocialSlice.reducer;
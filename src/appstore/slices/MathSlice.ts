import { createSlice } from "@reduxjs/toolkit";

const MathSlice = createSlice({
     name:'Maths',
     initialState:{
        books:[]
     },
     reducers:{
        addMathBook: (state :{books:string[]} , action:{payload : string})=>{
            console.log("add Math Book" , action.payload)
            state.books.push(action.payload)
        },
     }
})

export const{addMathBook} = MathSlice.actions;
export default MathSlice.reducer
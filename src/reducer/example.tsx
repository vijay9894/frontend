import { combineReducers, createStore } from "@reduxjs/toolkit";

const settingsReducer = (state = {theme : "light"}, action : any) =>{
    if(action.type === "toggle_theme"){
        return {theme :state.theme === "light" ? "dark" :"light"}
    }
    return state;
}

// const userInfoReducer =(state:{isUserLogin : "No"} , action:any)=>{
//     return state;
// }

const rootReducer = combineReducers({
    settings : settingsReducer,
})

const store = createStore(rootReducer);
console.log(store.getState());

function storeDispatcher(){
    store.dispatch({type:"toggle_theme"})
}

import  { useEffect, useState } from "react";

function ReducerExample(){
    const [theme1, setTheme1] = useState(store.getState().settings.theme);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setTheme1(store.getState().settings.theme);
        });
        return () => unsubscribe();
    }, []);

    return(
        <>
            <button className="border-2 mt-4" onClick={storeDispatcher} > Toggle Theme {theme1}</button>
        </>
    )
}

export default ReducerExample;
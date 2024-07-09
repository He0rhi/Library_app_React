import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isGuest:true,
}

const userSlice=createSlice({
    name: 'user',
    initialState,
    reducers:{
logInAsQuest(state){
    state.isGuest=true;
},
logInAsUser(state){
    state.isGuest=false;
},
signUp(state){
state.isGuest=false;
},
logOut(state){
    state.isGuest=true;
}

    }
});
export const { logInAsQuest, logOut, signUp,logInAsUser } = userSlice.actions;
export default userSlice.reducer;


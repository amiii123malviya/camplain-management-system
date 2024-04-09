import { createSlice } from "@reduxjs/toolkit"


const initialState={
    adminname:"",
    auth:false

}
const AdminSlice=createSlice({
    name:"admin",
    initialState:initialState,
    reducers:{
        loginadmin:(state,action)=>{
            state.auth=true;
            state.adminname=action.payload;
    

        },
        logoutadmin:(state)=>
        {
            state.auth=false;
            state.adminname="";
        }

    }
})
export const{loginadmin,logoutadmin}=AdminSlice.actions;
export default AdminSlice.reducer;


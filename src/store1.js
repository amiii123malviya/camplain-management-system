import { configureStore } from "@reduxjs/toolkit";
import Stureducer from "./Stuslice";
import storage from 'redux-persist/lib/storage';
import Adminreducer from "./AdminSlice";
import { persistReducer,persistStore } from "redux-persist";
const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig,Stureducer)
const persistedReducer1 = persistReducer(persistConfig,Adminreducer)
const store1=configureStore({
     
    reducer:{
        // stuUser:Stureducer  
        stuUser: persistedReducer,   
        admin: persistedReducer1,   
    }

})
export default store1;
export const persistor = persistStore(store1)
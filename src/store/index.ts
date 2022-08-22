import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./UserStore/userSlice";
import {contactsApi} from "./Servises/contactsApi";

const rootReducer = combineReducers({
    userReducer,
    [contactsApi.reducerPath]:contactsApi.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware)=>
            getDefaultMiddleware().concat(contactsApi.middleware)
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
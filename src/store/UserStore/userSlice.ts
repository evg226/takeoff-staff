import {IUser} from "../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryLogin} from "./UsersApi";

interface IUserState {
    isLoading: boolean,
    error: string,
    user: IUser;
    isAuth: boolean;
};

const initialState: IUserState = {
    isLoading: false,
    error: '',
    user: {id: 0, username: 'guest', email: '',token:''},
    isAuth: false,
};

export const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
            userLogout(state) {
                return initialState;
            }
        },
        extraReducers: {
            [queryLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
                state.isLoading = false;
                state.error = '';
                localStorage.setItem('token',action.payload.token);
                state.user = {...action.payload,token:""};
                state.isAuth = true;
            },
            [queryLogin.pending.type]: (state) => {
                state.isLoading = true;
            },
            [queryLogin.rejected.type]: (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload
            }
        }
    })
;

export const userReducer = userSlice.reducer;
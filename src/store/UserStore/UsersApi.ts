import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import {IUser} from "../models/IUser";


export const queryLogin = createAsyncThunk(
    'user/login',
    async (username:string , thunkApi) => {
        try {
            const response = await axios.get<IUser>(`http://localhost:5000/users/${username}`,);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue('Ответ сервера об ошибке авторизации');
        }
    }
)
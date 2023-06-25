import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ILoginPage} from "../../models/ILoginPage";

const initialState: ILoginPage = {
    email: "",
    access_token: "",
    refresh_token: "",
    username: "",
    is_banned: false,
};

const loginPageSlice = createSlice({
    name: "loginPage",
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setAccess_token: (state, action: PayloadAction<string>) => {
            state.access_token = action.payload;
        },
        setRefresh_token: (state, action: PayloadAction<string>) => {
            state.refresh_token = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setIs_banned: (state, action: PayloadAction<boolean>) => {
            state.is_banned = action.payload;
        },
    },
});

export const {setEmail, setAccess_token, setRefresh_token,setUsername, setIs_banned} =
    loginPageSlice.actions;
export default loginPageSlice.reducer;
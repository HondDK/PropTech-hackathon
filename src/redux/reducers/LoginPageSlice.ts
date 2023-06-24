import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ILoginPage} from "../../models/ILoginPage";

const initialState: ILoginPage = {
    email: "",
    access_token: "",
    refresh_token: "",
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

    },
});

export const {setEmail, setAccess_token, setRefresh_token} =
    loginPageSlice.actions;
export default loginPageSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    isLoggedIn: boolean;
    user: null | User;
};

const initialState: InitialState = {
    isLoggedIn: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {
        setUser: (state, { payload }: { payload: User }) => {
            state.user = payload;
        },

        setLoggedIn: (state, { payload }: { payload: boolean }) => {
            state.isLoggedIn = payload;
        },
    },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

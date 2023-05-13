import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    showModal: boolean;
};

const initialState: InitialState = {
    showModal: false,
};

const utilSlice = createSlice({
    name: 'utils',

    initialState,

    reducers: {
        switchModal: (state, { payload }: { payload: boolean }) => {
            state.showModal = payload;
        },
    },
});

export const { switchModal } = utilSlice.actions;

export default utilSlice.reducer;

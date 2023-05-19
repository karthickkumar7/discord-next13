import { configureStore } from '@reduxjs/toolkit';
import utils from './reducers/utilSlice';
import auth from './reducers/authSlice';
import friends from './reducers/friendsSlice';

export const store = configureStore({
    reducer: {
        utils,
        auth,
        friends,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

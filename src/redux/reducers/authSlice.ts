import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
const URL = 'http://localhost:5000/auth';

type InitialState = {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    userDetails: UserDetails | null;
};

const initialState: InitialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    userDetails: null,
};

const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {},
    extraReducers: (builder) => {
        // login
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;

                localStorage.setItem(
                    'user',
                    JSON.stringify(payload.userDetails)
                );
                state.userDetails = payload.userDetails;

                toast.success(payload.msg);
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                if (payload) toast.error(payload.error);
            });

        // register
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;

                localStorage.setItem(
                    'user',
                    JSON.stringify(payload.userDetails)
                );
                state.userDetails = payload.userDetails;

                toast.success(payload.msg);
                console.log('succ', payload);
            })
            .addCase(register.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                if (payload) toast.error(payload.error);
                console.log('err', payload);
            });
    },
});

// async thunks

// login thunk
type loginFormPayload = {
    email: string;
    password: string;
};

type UserDetails = {
    _id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
};

type loginReturnType = {
    msg: string;
    token: string;
    userDetails: UserDetails;
};

type RejectType = {
    error: string;
};

export const login = createAsyncThunk<
    loginReturnType,
    loginFormPayload,
    { rejectValue: RejectType }
>('auth/login', async (payload, thunkApi) => {
    try {
        const res = await fetch(`${URL}/login`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) return await res.json();
        else {
            return thunkApi.rejectWithValue(await res.json());
        }
    } catch (err) {
        return thunkApi.rejectWithValue({
            error: 'Something went wrong!',
        });
    }
});

// register thunk
type registerFormPayload = {
    username: string;
    email: string;
    password: string;
};

type registerReturnType = {
    msg: string;
    token: string;
    userDetails: UserDetails;
};

export const register = createAsyncThunk<
    registerReturnType,
    registerFormPayload,
    { rejectValue: RejectType }
>('auth/register', async (payload, thunkApi) => {
    try {
        const res = await fetch(`${URL}/register`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) return await res.json();
        else {
            return thunkApi.rejectWithValue(await res.json());
        }
    } catch (err) {
        return thunkApi.rejectWithValue({ error: 'Something went wrong!' });
    }
});

export default authSlice.reducer;

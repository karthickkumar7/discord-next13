'use client';
import { setUser } from '@/redux/reducers/authSlice';
import { store } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Logout = () => {
    const router = useRouter();

    const logoutHandler = async () => {
        localStorage.removeItem('token');
        store.dispatch(setUser(null));
        toast.success('logout successfull!');
        router.push('/login');
    };

    return <button onClick={logoutHandler}>logout</button>;
};

export default Logout;

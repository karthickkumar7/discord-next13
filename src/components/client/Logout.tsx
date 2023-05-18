'use client';
import { URL } from '@/config/urls';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Logout = () => {
    const router = useRouter();

    const logoutHandler = async () => {
        try {
            const res = await fetch(`${URL}/auth/logout`, {
                cache: 'no-store',
                credentials: 'include',
            });
            if (!res.ok) {
                console.log('no okay');
                return;
            }

            const { msg } = await res.json();
            toast.success(msg);
            router.push('/login');
        } catch (err) {}
    };

    return <button onClick={logoutHandler}>logout</button>;
};

export default Logout;

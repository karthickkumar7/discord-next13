'use client';
import { URL } from '@/config/urls';
import { setUser } from '@/redux/reducers/authSlice';
import { store } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const TestUserComp = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${URL}/auth/validate`, {
                    cache: 'no-store',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                });

                if (!res.ok) {
                    localStorage.removeItem('token');
                    router.push('/login');
                    return;
                }

                const data = await res.json();
                const user = { ...data, token: localStorage.getItem('token') };
                store.dispatch(setUser(user));
                setIsLoading(false);
                setData(user);
            } catch (err) {
                setIsLoading(false);
                // router.push('/login');
                toast.error('Something went wrong!');
                console.log(err);
            }
        })();
    }, []);

    if (isLoading)
        return (
            <div>
                <h1 className="text-2xl text-white">loading...</h1>
            </div>
        );

    return (
        <div className="text-white">
            {data && JSON.stringify(data.username)}
            {data && JSON.stringify(data.email)}
        </div>
    );
};

export default TestUserComp;

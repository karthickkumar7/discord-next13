'use client';
import { URL } from '@/config/urls';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const TestUserComp = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${URL}/auth/validate`, {
                    cache: 'no-store',
                    credentials: 'include',
                });

                if (!res.ok) {
                    router.push('/login');
                    return;
                }

                const user: User = await res.json();
                setIsLoading(false);
                setData(user);
            } catch (err) {
                setIsLoading(false);
                router.push('/login');
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

    return <div className="text-white">{data && JSON.stringify(data)}</div>;
};

export default TestUserComp;

'use client';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { connectSocket, socket } from './socketClient';

const SocketProvider = ({ children }: { children: ReactNode }) => {
    const { user } = useSelector((s: RootState) => s.auth);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (user) {
            connectSocket(user);
            return () => {
                socket.disconnect();
            };
        }
    }, [user]);

    return <>{children}</>;
};

export default SocketProvider;

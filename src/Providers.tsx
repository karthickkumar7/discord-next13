'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SocketProvider from './SocketProvider';

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Provider store={store}>
                <SocketProvider>{children}</SocketProvider>
            </Provider>
        </>
    );
};

export default Providers;

import { ReactNode } from 'react';

const SidebarIcon = ({ children }: { children: ReactNode }) => {
    return (
        <div className="px-3 py-2 w-[60px] h-[60px] flex items-center justify-center text-3xl rounded-2xl bg-indigo-500 text-white hover:bg-indigo-600 active:brightness-110 duration-300 cursor-pointer">
            {children}
        </div>
    );
};

export default SidebarIcon;

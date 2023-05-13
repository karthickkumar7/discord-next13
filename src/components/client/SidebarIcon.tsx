import { ReactNode } from 'react';

const SidebarIcon = ({ children }: { children: ReactNode }) => {
    return (
        <div className="group relative px-3 py-2 w-[50px] h-[50px] flex items-center justify-center text-3xl rounded-2xl bg-burple text-white active:translate-y-[1px] duration-300 cursor-pointer">
            <div className="absolute -left-4 w-2 h-8 rounded bg-white hidden group-hover:inline-block"></div>
            {children}
        </div>
    );
};

export default SidebarIcon;

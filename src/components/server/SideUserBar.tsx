import React from 'react';
import User from '../client/User';
import UserNotification from '../client/UserNotification';

const SideUserBar = () => {
    return (
        <section className="w-[13%] h-full bg-slate-700">
            <div className="w-full h-[7%] p-4">
                <button className="w-full px-4 py-2 rounded text-lg font-semibold tracking-wider hover:bg-emerald-600 bg-emerald-500 text-white active:brightness-110 duration-300">
                    Add Friend
                </button>
            </div>
            <div className="w-full h-[70%]">
                <div className="border-b border-b-slate-500 pb-4">
                    <h2 className="text-xl uppercase tracking-wider text-slate-400 text-center">
                        private messages
                    </h2>
                </div>
                <User username="karthick" isActive={true} />
                <User username="test12" isActive={true} />
                <User username="noice" isActive={false} />
            </div>
            <div className="w-full h-[23%]">
                <div className="border-b border-b-slate-500 pb-4">
                    <h2 className="text-xl uppercase tracking-wider text-slate-400 text-center">
                        notifications
                    </h2>
                </div>
                <UserNotification username="karthick" />
            </div>
        </section>
    );
};

export default SideUserBar;

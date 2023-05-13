import React from 'react';
import AddFriendButton from '../client/AddFriendButton';
import User from '../client/User';
import UserNotification from '../client/UserNotification';

const SideUserBar = () => {
    return (
        <section className="w-[10%] h-full bg-darkgray">
            <AddFriendButton />
            <div className="w-full h-[70%]">
                <div className="border-b border-b-slate-500 pb-4">
                    <h2 className="px-4 uppercase tracking-wider text-slate-400">
                        private messages
                    </h2>
                </div>
                <User username="karthick" isActive={true} />
                <User username="test12" isActive={true} />
                <User username="noice" isActive={false} />
            </div>
            <div className="w-full h-[23%]">
                <div className="border-b border-b-slate-500 pb-4">
                    <h2 className="px-4 uppercase tracking-wider text-slate-400">
                        notifications
                    </h2>
                </div>
                <UserNotification username="karthick" />
            </div>
        </section>
    );
};

export default SideUserBar;

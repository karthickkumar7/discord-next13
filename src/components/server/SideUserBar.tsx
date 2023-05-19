import React from 'react';
import AddFriendButton from '../client/friends/AddFriendButton';
import FriendsList from '../client/friends/FriendsList';
import PendingInvitationsList from '../client/friends/PendingInvitationsList';

const SideUserBar = () => {
    return (
        <section className="hidden md:inline-block md:w-[20%] lg:w-[10%] h-full bg-darkgray">
            <AddFriendButton />
            <div className="w-full h-[70%]">
                <div className="border-b border-b-slate-500 pb-4">
                    <h2 className="px-4 uppercase tracking-wider text-slate-400">
                        private messages
                    </h2>
                </div>
                <FriendsList />
            </div>
            <div className="w-full h-[23%]">
                <div className="border-b border-b-slate-500 pb-4">
                    <h2 className="px-4 uppercase tracking-wider text-slate-400">
                        notifications
                    </h2>
                </div>
                <PendingInvitationsList />
            </div>
        </section>
    );
};

export default SideUserBar;

import React from 'react';
import FriendInviteModal from '../client/FriendInviteModal';
import Logout from '../client/Logout';
import TestUserComp from '../client/TestUserComp';

const MainContainer = () => {
    return (
        <section className="w-[87%] h-full flex flex-col items-center overflow-y-auto">
            <FriendInviteModal />
            <nav className="w-full h-[50px] border-b border-black">
                <Logout />
            </nav>
            <TestUserComp />
        </section>
    );
};

export default MainContainer;

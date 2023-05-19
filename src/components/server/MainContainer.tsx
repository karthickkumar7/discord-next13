import React from 'react';
import FriendInviteModal from '../client/friends/FriendInviteModal';
import Logout from '../client/auth/Logout';
import TestUserComp from '../client/TestUserComp';

const MainContainer = () => {
    return (
        <section className="md:w-[87%] lg:w-[77%] h-full flex flex-col items-center overflow-y-auto">
            <FriendInviteModal />
            <nav className="w-full h-[50px] border-b border-black">
                <Logout />
            </nav>
            <TestUserComp />
        </section>
    );
};

export default MainContainer;

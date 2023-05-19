'use client';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import UserNotification from './UserNotification';

const PendingInvitationsList = () => {
    const { pendingFriendsInvitation } = useSelector(
        (s: RootState) => s.friends
    );

    if (!pendingFriendsInvitation.length)
        return (
            <div className="p-2 text-white text-xl font-semibold">
                <p className="text-center">No Invitations</p>
            </div>
        );
    return (
        <>
            {pendingFriendsInvitation.map((invitation) => (
                <UserNotification
                    key={invitation._id}
                    username={invitation.senderId.username}
                    id={invitation._id}
                />
            ))}
        </>
    );
};

export default PendingInvitationsList;

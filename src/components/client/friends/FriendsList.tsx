'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import User from './User';

const FriendsList = () => {
    const { friends } = useSelector((s: RootState) => s.friends);
    return (
        <>
            {friends.map((friend) => (
                <User
                    key={friend._id}
                    username={friend.username}
                    isActive={true}
                />
            ))}
        </>
    );
};

export default FriendsList;

'use client';
import { switchModal } from '@/redux/reducers/utilSlice';
import { AppDispatch } from '@/redux/store';
import React from 'react';
import { useDispatch } from 'react-redux';

const AddFriendButton = () => {
    const dispatch: AppDispatch = useDispatch();
    return (
        <div className="w-full h-[7%] p-4">
            <button
                className="w-full px-4 py-2 rounded text-lg font-semibold tracking-wider active:scale-x-[1.01] bg-green text-white active:brightness-110 duration-300"
                onClick={() => dispatch(switchModal(true))}
            >
                Add Friend
            </button>
        </div>
    );
};

export default AddFriendButton;

'use client';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { switchModal } from '@/redux/reducers/utilSlice';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import {} from '@/redux/reducers/friendsSlice';
import { URL } from '@/config/urls';
import toast from 'react-hot-toast';

const Modal = () => {
    const [inviteEmail, setInviteEmail] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const friendInviteHandler = async () => {
        try {
            const res = await fetch(`${URL}/friend-invitation/invite`, {
                cache: 'no-store',
                method: 'POST',
                body: JSON.stringify({ email: inviteEmail }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (!res.ok) {
                const { error } = await res.json();
                toast.error(error);
                return;
            }

            const { msg } = await res.json();
            toast.success(msg);
            dispatch(switchModal(false));
        } catch (err) {}
    };

    return (
        <>
            <div className="w-5/6 md:w-[600px] h-[230px] md:h-[300px] p-4 rounded bg-white absolute z-10 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]">
                <RxCross2
                    className="absolute right-2 top-2 w-[20px] h-[20px] md:w-[40px] md:h-[40px] md:p-1 text-xl text-end cursor-pointer rounded-lg hover:opacity-80 duration-300 bg-slate-200 text-black"
                    onClick={() => dispatch(switchModal(false))}
                />
                <div className="mt-4 md:space-y-6">
                    <h2 className="text-lg md:text-2xl font-bold tracking-wide text-black">
                        Invite A Friend
                    </h2>
                    <p className="text-xs md:text-lg text-slate-500">
                        Enter E-mail address of the friend you want to invite
                    </p>
                    <input
                        type="text"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                        className="w-full mt-4 font-semibold text-black px-2 md:py-2 ring ring-slate-200 focus:ring-sky-500 rounded outline-none"
                    />
                    <button
                        className="w-full block px-2 py-2 md:py-2 mt-4 bg-burple text-white rounded uppercase hover:opacity-80 duration-300 active:opacity-100 active:shadow-md"
                        onClick={friendInviteHandler}
                    >
                        send invite
                    </button>
                </div>
            </div>

            {/* overlay */}
            <div
                className="absolute inset-0 bg-black/60"
                onClick={() => {
                    dispatch(switchModal(false));
                }}
            ></div>
        </>
    );
};

export default Modal;

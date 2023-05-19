'use client';
import { URL } from '@/config/urls';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

type Props = {
    id: string;
};

const PendingInvitationsButtons = (id: Props) => {
    const invitationActionHandler = async (val: string) => {
        try {
            const res = await fetch(
                `${URL}/friend-invitation/invitation-action`,
                {
                    cache: 'no-store',
                    method: 'POST',
                    body: JSON.stringify({ action: val, id }),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            );

            if (!res.ok) {
                toast.error('Something went wrong!');
                return;
            }

            const { msg } = await res.json();
            toast.success(msg);
        } catch (err) {}
    };

    return (
        <section className="flex space-x-4 text-2xl">
            <MdDone
                className="rounded-full cursor-pointer text-emerald-400 hover:bg-slate-600 active:brightness-110"
                onClick={() => invitationActionHandler('accept')}
            />
            <RxCross2
                className="rounded-full cursor-pointer text-red-400 hover:bg-slate-600 active:brightness-110"
                onClick={() => invitationActionHandler('reject')}
            />
        </section>
    );
};

export default PendingInvitationsButtons;

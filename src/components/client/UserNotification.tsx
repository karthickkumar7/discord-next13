import React from 'react';
import UserAvatarName from './UserAvatarName';
import { MdDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

type Props = {
    username: string;
};

const UserNotification = ({ username }: Props) => {
    return (
        <article className="flex items-center justify-between px-4 py-2 cursor-default hover:bg-slate-600 duration-300">
            <UserAvatarName username={username} />

            <section className="flex space-x-4 text-3xl">
                <MdDone className="rounded-full cursor-pointer text-green-400 hover:bg-slate-600 active:brightness-110" />
                <RxCross2 className="rounded-full cursor-pointer text-red-400 hover:bg-slate-600 active:brightness-110" />
            </section>
        </article>
    );
};

export default UserNotification;

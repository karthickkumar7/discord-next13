import React from 'react';
import UserAvatarName from './UserAvatarName';

type Props = {
    username: string;
    isActive: boolean;
};

const User = ({ username, isActive }: Props) => {
    return (
        <article className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-slate-600 active:brightness-110 duration-300">
            <UserAvatarName username={username} />
            {isActive && (
                <section>
                    <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
                </section>
            )}
        </article>
    );
};

export default User;

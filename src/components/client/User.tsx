import React from 'react';
import UserAvatarName from './UserAvatarName';

type Props = {
    username: string;
    isActive: boolean;
};

const User = ({ username, isActive }: Props) => {
    return (
        <article className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-Gray active:brightness-110 duration-300">
            <UserAvatarName username={username} />
            {isActive && (
                <section>
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                </section>
            )}
        </article>
    );
};

export default User;

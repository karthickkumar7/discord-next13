import React from 'react';

type Props = {
    username: string;
};

const UserAvatarName = ({ username }: Props) => {
    return (
        <section className="flex items-center space-x-3">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-indigo-500">
                <span className="text-2xl text-white font-bold">
                    {username.substring(0, 2)}
                </span>
            </div>
            <p className="text-lg font-semibold text-slate-200">{username}</p>
        </section>
    );
};

export default UserAvatarName;

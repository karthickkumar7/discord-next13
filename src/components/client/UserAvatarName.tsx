import React from 'react';

type Props = {
    username: string;
};

const UserAvatarName = ({ username }: Props) => {
    return (
        <section className="flex items-center space-x-3">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-burple">
                <span className="text-xl text-white font-semibold">
                    {username.substring(0, 2)}
                </span>
            </div>
            <p className="text-lg font-semibold capitalize text-slate-200">
                {username}
            </p>
        </section>
    );
};

export default UserAvatarName;

import { HiStatusOnline } from 'react-icons/hi';
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
                    <HiStatusOnline className="text-lg text-emerald-400" />
                </section>
            )}
        </article>
    );
};

export default User;

import PendingInvitationsButtons from './PendingInvitationsButtons';
import UserAvatarName from './UserAvatarName';

type Props = {
    username: string;
    id: string;
};

const UserNotification = ({ username, id }: Props) => {
    return (
        <article className="flex items-center justify-between px-4 py-2 cursor-default hover:bg-Gray duration-300">
            <UserAvatarName username={username} />
            <PendingInvitationsButtons id={id} />
        </article>
    );
};

export default UserNotification;

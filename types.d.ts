type User = {
    _id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    token: string;
};

type PendingInvitaionUser = {
    _id: string;
    recieverId: string;
    senderId: {
        _id: string;
        username: string;
        email: string;
    };
};

type FriendsList = {
    _id: string;
    username: string;
    email: string;
};

import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    friends: FriendsList[];
    pendingFriendsInvitation: PendingInvitaionUser[];
    onlineUsers: string[];
};

const initialState: InitialState = {
    friends: [],
    pendingFriendsInvitation: [],
    onlineUsers: [],
};

const friendsSlice = createSlice({
    name: 'friends',

    initialState,

    reducers: {
        setFriends: (state, { payload }: { payload: FriendsList[] }) => {
            state.friends = payload;
        },

        setOnlineUsers: (state, { payload }) => {},

        setPendingFriendsInvitations: (
            state,
            { payload }: { payload: PendingInvitaionUser[] }
        ) => {
            state.pendingFriendsInvitation = payload;
        },
    },
});

export const { setFriends, setOnlineUsers, setPendingFriendsInvitations } =
    friendsSlice.actions;

export default friendsSlice.reducer;

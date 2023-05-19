import { io, Socket } from 'socket.io-client';
import { URL } from './config/urls';
import {
    setFriends,
    setPendingFriendsInvitations,
} from './redux/reducers/friendsSlice';
import { store } from './redux/store';

export let socket: Socket;

export const connectSocket = (user: User) => {
    socket = io(URL, {
        auth: {
            token: user.token,
        },
    });

    socket.on('connect', () => {
        console.log('successfully connected to socket.io server', socket.id);
    });

    socket.on(
        'friends-invitation',
        (data: { pendingInvitations: PendingInvitaionUser[] }) => {
            const { pendingInvitations } = data;
            store.dispatch(setPendingFriendsInvitations(pendingInvitations));
        }
    );

    socket.on('friends-list', (data: { friendsList: FriendsList[] }) => {
        const { friendsList } = data;
        console.log('tapped');
        console.log(friendsList);
        store.dispatch(setFriends(friendsList));
    });
};

import { DefaultToastOptions } from 'react-hot-toast';

export const toastOptions: DefaultToastOptions = {
    duration: 4000,
    success: {},
    error: {},
    style: {
        width: '500px',
        height: '60px',
        fontSize: '20px',
        fontWeight: 'bold',
    },
};

// success
//  style: {
//             background: '#00ff00',
//             color: '#fff',
//         },
//         iconTheme: {
//             primary: '#fff',
//             secondary: '#000',
//         },

//error
//  style: {
//             background: '#ed2459',
//             color: '#fff',
//         },
//         iconTheme: {
//             primary: '#fff',
//             secondary: '#ed2459',
//         },

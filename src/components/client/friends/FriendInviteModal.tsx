'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import Modal from './Modal';

const DisplayModal = () => {
    const { showModal } = useSelector((s: RootState) => s.utils);

    return <>{showModal && <Modal />}</>;
};

export default DisplayModal;

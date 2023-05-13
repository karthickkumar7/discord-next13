'use client';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { switchModal } from '@/redux/reducers/utilSlice';
import { RxCross2 } from 'react-icons/rx';

const Modal = () => {
    const dispatch: AppDispatch = useDispatch();

    return (
        <>
            <div className="w-full md:w-[600px] h-[200px] md:h-[300px] rounded bg-slate-200 absolute z-10 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]">
                <div className="p-2 flex justify-end">
                    <RxCross2
                        className="w-[30px] h-[30px] text-xl text-end cursor-pointer hover:opacity-80 duration-300 bg-red-600 text-white"
                        onClick={() => dispatch(switchModal(false))}
                    />
                </div>
            </div>

            {/* overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={() => {
                    dispatch(switchModal(false));
                }}
            ></div>
        </>
    );
};

export default Modal;

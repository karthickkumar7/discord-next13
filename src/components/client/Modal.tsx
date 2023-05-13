'use client';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { switchModal } from '@/redux/reducers/utilSlice';
import { RxCross2 } from 'react-icons/rx';

const Modal = () => {
    const dispatch: AppDispatch = useDispatch();

    return (
        <>
            <div className="w-5/6 md:w-[600px] h-[230px] md:h-[300px] p-4 rounded-lg bg-white absolute z-10 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]">
                <RxCross2
                    className="absolute right-2 top-2 w-[20px] h-[20px] md:w-[40px] md:h-[40px] md:p-1 text-xl text-end cursor-pointer rounded-full hover:opacity-80 duration-300 bg-slate-200 text-black hover:bg-red-500 hover:text-white"
                    onClick={() => dispatch(switchModal(false))}
                />
                <div className="mt-4">
                    <h2 className="text-lg md:text-2xl font-bold tracking-wide text-black">
                        Enter the Friend Code
                    </h2>
                    <p className="text-xs md:text-lg text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo totam consequuntur ipsum assumenda fugiat esse!
                    </p>
                    <input
                        type="text"
                        className="w-5/6 mt-4 text-black px-2 md:py-2 ring ring-slate-200 focus:ring-sky-500 rounded-lg outline-none"
                    />
                    <button className="w-[200px] block px-2 py-1 md:py-2 mt-4 bg-burple rounded-lg uppercase">
                        send invite
                    </button>
                </div>
            </div>

            {/* overlay */}
            <div
                className="absolute inset-0 bg-black/60"
                onClick={() => {
                    dispatch(switchModal(false));
                }}
            ></div>
        </>
    );
};

export default Modal;

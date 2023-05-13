'use client';

import { switchModal } from '@/redux/reducers/utilSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const RegisterForm = () => {
    const [disabled, setDisabled] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirm: '',
    });

    const { showModal } = useSelector((s: RootState) => s.utils);
    const dispatch: AppDispatch = useDispatch();

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(switchModal(true));
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((pv) => ({ ...pv, [e.target.name]: e.target.value }));
    };

    // unable and disable submit button
    useEffect(() => {
        if (
            disabled &&
            formData.email.length > 11 &&
            formData.password.length > 5 &&
            formData.username.length > 3 &&
            formData.password === formData.confirm
        ) {
            setDisabled(false);
        }
        if (
            !disabled &&
            (formData.email.length < 11 ||
                formData.password.length < 5 ||
                formData.username.length < 3 ||
                formData.password !== formData.confirm)
        ) {
            setDisabled(true);
        }
    }, [formData]);

    return (
        <>
            <form className="max-w-2xl mx-auto" onSubmit={submitHandler}>
                <div className="mt-4 space-y-1">
                    <label
                        htmlFor="username"
                        className="text-slate-100 text-base md:text-lg font-semibold"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your Name"
                        value={formData.username}
                        onChange={changeHandler}
                        className="inp-dark"
                    />
                </div>
                <div className="mt-4 space-y-1">
                    <label
                        htmlFor="email"
                        className="text-slate-100 text-base md:text-lg font-semibold"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={changeHandler}
                        className="inp-dark"
                    />
                </div>
                <div className="mt-4 space-y-1">
                    <div className="flex items-center gap-4">
                        <label
                            htmlFor="password"
                            className="text-slate-100 text-base md:text-lg font-semibold"
                        >
                            Password
                        </label>
                        <div
                            className="flex items-center"
                            onClick={() => setShowPassword((pv) => !pv)}
                        >
                            {showPassword ? (
                                <AiFillEyeInvisible className="cursor-pointer active:brightness-110" />
                            ) : (
                                <AiFillEye className="cursor-pointer active:brightness-110" />
                            )}
                        </div>
                    </div>
                    <input
                        type={`${showPassword ? 'text' : 'password'}`}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={changeHandler}
                        className="inp-dark"
                    />
                </div>
                <div className="mt-4 space-y-1">
                    <label
                        htmlFor="confirm"
                        className="text-slate-100 text-base md:text-lg font-semibold"
                    >
                        Confirm Password
                    </label>
                    <input
                        type={`${showPassword ? 'text' : 'password'}`}
                        id="confirm"
                        name="confirm"
                        placeholder="Enter your password"
                        value={formData.confirm}
                        onChange={changeHandler}
                        className="inp-dark"
                    />
                </div>
                <button
                    disabled={disabled}
                    type="submit"
                    className={`w-full px-4 py-3 mt-8 rounded uppercase font-semibold duration-300 tracking-wider ${
                        disabled
                            ? 'bg-slate-800'
                            : 'bg-burple hover:contrast-75 active:brightness-125'
                    }`}
                >
                    register
                </button>
            </form>
            {showModal && <Modal />}
        </>
    );
};

export default RegisterForm;

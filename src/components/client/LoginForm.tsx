'use client';
import toast from 'react-hot-toast';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const LoginForm = () => {
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.error('login success!');
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((pv) => ({ ...pv, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        if (
            disabled &&
            formData.email.length > 11 &&
            formData.password.length > 5
        ) {
            console.log('on');
            setDisabled(false);
        }
        if (
            !disabled &&
            (formData.email.length < 11 || formData.password.length < 5)
        ) {
            setDisabled(true);
        }
    }, [formData]);

    return (
        <form className="max-w-2xl mx-auto" onSubmit={submitHandler}>
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
                    className="w-full px-2 md:px-4 py-2 md:py-3 outline-none rounded border border-slate-400 focus:border-sky-500 bg-slate-700"
                />
            </div>
            <div className="mt-4 space-y-1">
                <label
                    htmlFor="password"
                    className="text-slate-100 text-base md:text-lg font-semibold"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={changeHandler}
                    className="w-full px-2 md:px-4 py-2 md:py-3 outline-none rounded border border-slate-400 focus:border-sky-500 bg-slate-700"
                />
            </div>
            <button
                disabled={disabled}
                type="submit"
                className={`w-full px-4 py-3 mt-8 rounded uppercase font-semibold duration-300 tracking-wider ${
                    disabled
                        ? 'bg-slate-800'
                        : 'bg-indigo-600 hover:bg-indigo-700 active:brightness-110'
                }`}
            >
                login
            </button>
        </form>
    );
};

export default LoginForm;

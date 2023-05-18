'use client';

import { validateRegisterForm } from '@/utils/formValidator';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import FormInput from './ui/FormInput';
import FormShowPasswordIcons from './ui/FormShowPasswordIcons';
import toast from 'react-hot-toast';
import Spinner from './ui/Spinner';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const [disabled, setDisabled] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirm: '',
    });
    const router = useRouter();

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { username, email, password, confirm } = formData;
        if (validateRegisterForm(username, email, password, confirm)) {
            try {
                const res = await fetch(`${URL}/auth/register`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email,
                        username,
                        password,
                    }),
                    credentials: 'include',
                    cache: 'no-store',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!res.ok) {
                    const { error } = await res.json();
                    toast.error(error);
                    setIsloading(false);
                    return;
                }

                setIsloading(false);
                const { msg } = await res.json();
                toast.success(msg);
                router.push('/dashboard');
            } catch (err) {
                setIsloading(false);
                toast.error('Something went wrong!');
            }
        } else {
            toast.error('Invalid Form!');
        }
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
                <FormInput
                    value={formData.username}
                    handler={changeHandler}
                    title="Username"
                    id="username"
                    type="text"
                    placeholder="must be atleast 4 characters"
                />
                <FormInput
                    value={formData.email}
                    handler={changeHandler}
                    title="Email"
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                />

                <FormInput
                    value={formData.password}
                    handler={changeHandler}
                    title="Password"
                    id="password"
                    type={`${showPassword ? 'text' : 'password'}`}
                    placeholder="must be atleast 6 characters"
                >
                    <FormShowPasswordIcons
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                </FormInput>
                <FormInput
                    value={formData.confirm}
                    handler={changeHandler}
                    title="Confirm Password"
                    id="confirm"
                    type={`${showPassword ? 'text' : 'password'}`}
                    placeholder="re-enter the password"
                />
                <button
                    disabled={disabled}
                    type="submit"
                    className={`group w-full px-4 py-3 mt-8 rounded uppercase font-semibold duration-300 tracking-wider relative ${
                        disabled
                            ? 'bg-slate-800'
                            : 'bg-burple hover:contrast-75 active:brightness-125'
                    }`}
                >
                    {isLoading ? <Spinner /> : 'register'}

                    <div className="hidden absolute -top-[60px] left-[270px] w-[150px] h-[50px] rounded-lg bg-white text-slate-700 lowercase tracking-normal group-hover:inline-block">
                        fill in the form to register
                    </div>
                </button>
            </form>
        </>
    );
};

export default RegisterForm;

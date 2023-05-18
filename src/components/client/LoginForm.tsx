'use client';
import toast from 'react-hot-toast';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import FormInput from './ui/FormInput';
import { validateLoginForm } from '@/utils/formValidator';
import Spinner from './ui/Spinner';
import { useRouter } from 'next/navigation';
import { URL } from '@/config/urls';

const LoginForm = () => {
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsloading] = useState(false);

    const router = useRouter();

    // login logic
    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsloading(true);
        if (validateLoginForm(formData.email, formData.password)) {
            try {
                const res = await fetch(`${URL}/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
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

    // disable and enable button
    useEffect(() => {
        if (
            disabled &&
            formData.email.length > 11 &&
            formData.password.length > 5
        ) {
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
            <FormInput
                value={formData.email}
                handler={changeHandler}
                title="Email"
                id="email"
                type="email"
                placeholder="enter your email address"
            />
            <FormInput
                value={formData.password}
                handler={changeHandler}
                title="Password"
                id="password"
                type="password"
                placeholder="enter your password"
            />

            <button
                disabled={disabled}
                type="submit"
                className={`w-full px-4 py-3 mt-8 rounded uppercase font-semibold duration-300 tracking-wider flex justify-center ${
                    disabled
                        ? 'bg-slate-800'
                        : 'bg-burple hover:contrast-75 active:brightness-125'
                }`}
            >
                {isLoading ? <Spinner /> : 'login'}
            </button>
        </form>
    );
};

export default LoginForm;

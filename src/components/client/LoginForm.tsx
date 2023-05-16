'use client';
import toast from 'react-hot-toast';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import FormInput from './ui/FormInput';
import { validateLoginForm } from '@/utils/formValidator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { login } from '@/redux/reducers/authSlice';
import Spinner from './ui/Spinner';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { isLoading, isSuccess } = useSelector((s: RootState) => s.auth);

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateLoginForm(formData.email, formData.password)) {
            // dispatch
            dispatch(login(formData));
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

    // redirect to dashboard
    useEffect(() => {
        if (isSuccess) {
            console.log('success');
            router.push('/dashboard');
        }
    }, [isSuccess]);

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

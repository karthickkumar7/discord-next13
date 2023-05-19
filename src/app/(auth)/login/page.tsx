import LoginForm from '@/components/client/auth/LoginForm';
import Link from 'next/link';

const page = () => {
    return (
        <div className="w-screen h-screen p-2 md:p-0 flex items-center justify-center bg-burple">
            <div className="w-full md:w-[800px] min-h-[400px] px-4 py-8 rounded bg-Gray text-slate-100">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-lg md:text-2xl font-bold tracking-wider">
                        Welcome Back!
                    </h1>
                    <p className="text-sm md:text-base text-slate-400">
                        Great to have you Back
                    </p>
                </div>
                <LoginForm />
                <div className="max-w-2xl mx-auto mt-8">
                    <p className="capitalize">
                        dont have an account?{' '}
                        <Link href={'/register'}>
                            <span className="hover:underline cursor-pointer lowercase text-sky-300">
                                register
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;

import RegisterForm from '@/components/client/RegisterForm';
import Link from 'next/link';

const page = () => {
    return (
        <div className="w-screen h-screen p-2 md:p-0 flex items-center justify-center bg-burple">
            <div className="w-full md:w-[800px] min-h-[500px] px-4 py-8 rounded bg-darkgray text-slate-100">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-lg md:text-2xl font-semibold tracking-wider">
                        Register
                    </h1>
                    <p className="text-sm md:text-base text-slate-400">
                        sign up to login!
                    </p>
                </div>
                <RegisterForm />
                <div className="max-w-2xl mx-auto mt-8">
                    <p className="capitalize">
                        already have an account?{' '}
                        <Link href={'/auth/login'}>
                            <span className="hover:underline cursor-pointer lowercase text-indigo-300">
                                login
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;

import { CgSpinner } from 'react-icons/cg';

const Spinner = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <CgSpinner className="text-lg animate-spin " />
        </div>
    );
};

export default Spinner;

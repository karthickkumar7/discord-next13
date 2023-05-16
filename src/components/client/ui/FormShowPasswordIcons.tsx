import { Dispatch, SetStateAction } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

type Props = {
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
};

const FormShowPasswordIcons = ({ showPassword, setShowPassword }: Props) => {
    return (
        <div
            className="inline-flex ml-4 items-center"
            onClick={() => setShowPassword((pv) => !pv)}
        >
            {showPassword ? (
                <AiOutlineEyeInvisible className="cursor-pointer active:brightness-110" />
            ) : (
                <AiOutlineEye className="cursor-pointer active:brightness-110" />
            )}
        </div>
    );
};

export default FormShowPasswordIcons;

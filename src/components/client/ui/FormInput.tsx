import React, { ChangeEvent, ReactNode } from 'react';

type Props = {
    value: string;
    handler: (e: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    type: string;
    id: string;
    children?: ReactNode;
    placeholder: string;
};

const FormInput = ({
    value,
    handler,
    type,
    title,
    id,
    children,
    placeholder,
}: Props) => {
    return (
        <div className="mt-4 space-y-1">
            <label
                htmlFor={id}
                className="text-slate-100 text-base md:text-lg font-semibold"
            >
                {title}
            </label>
            {children}
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={handler}
                className="inp-dark"
            />
        </div>
    );
};

export default FormInput;

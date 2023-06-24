import React, { ButtonHTMLAttributes } from 'react';

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
}

const MainButton = (props: MainButtonProps) => {
    const { children, ...rest } = props;

    return (
        <button type="button" className="mainBtn" {...rest}>
            {children}
        </button>
    );
};

export default MainButton;

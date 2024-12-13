import React from 'react';
import { ButtonEvent } from '@/app/Types';
import "./button.scss"

const Button = ({ router, name }: ButtonEvent) => {
    const handleClick = () => {
        window.location.href = `/${router}.html`, "_blank";
    };

    return (
        <div className="button" onClick={handleClick}>
            <p>{name}</p>
        </div>
    );
}

export default Button;

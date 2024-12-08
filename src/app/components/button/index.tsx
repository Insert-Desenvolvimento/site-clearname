import React from 'react';
import { ButtonEvent } from '@/app/Types';
import Link from 'next/link';
import "./button.scss"

const Button = ({router, name}: ButtonEvent) => {
    return (
    <Link href={`${router}`} target='_blank' rel="noopener noreferrer" >
        <div className="button">
            <p>{name}</p>
        </div>
    </Link>
    );
}

export default Button;

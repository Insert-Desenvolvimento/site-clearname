import React from 'react';
import styles from "./button.module.css"
import { ButtonEvent } from '@/app/Types';
import Link from 'next/link';
import "./button.scss"

const Button = ({router, name}: ButtonEvent) => {
    return (
    <Link href={`/${router}`} >
        <div className="button">
            <p>{name}</p>
        </div>
    </Link>
    );
}

export default Button;

import React from 'react';
import logo from "/public/logo.png"
import Image from 'next/image';
import { MenuListItens } from '@/app/Types';
import Link from 'next/link';
import styles from "./button.module.css"


const Button = () => {
    return (
        <div className={styles.button}>
            <p>Contato</p>
        </div>
    );
}

export default Button;

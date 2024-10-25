import React from 'react';
import styles from "./button.module.css"
import { Text } from '@/app/Types';


const CardService = ({ text }: Text) => {
    return (
        <div className={styles.card}>
            <p>{text}</p>
        </div>
    );
}

export default CardService;

import React from 'react';
import styles from "./button.module.css"
import { Text } from '@/app/Types';
import Image from 'next/image';
import IconArrow from "/public/arrowIcon.svg"


const CardService = ({ text, icon, paragraph }: Text) => {
    return (
        <div className={styles.card}>
            <p className={styles.containerIcons}> <Image src={icon} width={25} height={25} alt='Card element icon' className={styles.iconElement} />
                <Image src={IconArrow} width={25} height={25} alt='Card element icon' className={styles.iconElement} />
            </p>
            <p className={styles.textElement} id={styles.title}>{text}</p>
            <p className={styles.textParagraph}>{paragraph}</p>
        </div>
    );
}

export default CardService;

import React from 'react';
import logo from "/public/logo.png"
import Image from 'next/image';
import { MenuListItens } from '@/app/Types';
import Link from 'next/link';
import styles from "./header.module.css"


const Header = ({ menuItens }: MenuListItens) => {
    return (
        <div className={styles.headerMenu}>
            <div className={styles.imglogo}>
                <Image src={logo} alt="Logo" width={50} height={50} />
            </div>
            <div>
                <ul className={styles.headerList}>
                    {
                        menuItens?.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} key={index}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.clientArea}>
                <p>Área do Cliente</p>
            </div>
        </div>
    );
}

export default Header;

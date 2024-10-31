import React from 'react';
import "./whatsapp.scss";

const Whatsapp = () => {

    return (
        <div className="whats">
            <a href='https://wa.me/5532998463204?text=Olá! Venho pelo o Site e Tenho interesse em saber mais.' target='blank'>
                <img src="/whatsapp.png" alt="Icone whatsapp para entrar em contato com a Alpha" title='Fale com a Alpha' />
            </a>
        </div>
    );
};

export default Whatsapp;

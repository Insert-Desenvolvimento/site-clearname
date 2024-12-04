import React from 'react';
import "./cardAbout.scss"
interface ElementCard {
    title: string,
    paragraph?: string,
    list: string[]
}
interface ListProps {
    cardItem: ElementCard
}
const CardAbout = ({ cardItem }: ListProps) => {
    return (
        <div className='containerCard'>
            <div>
                <h2>{cardItem.title}</h2>
                <p>{cardItem.paragraph}</p>
            </div>
            {cardItem.list?.length > 0 && (
                <ul>
                    {
                        cardItem.list?.map((item, index) => (
                            <li key={index}>
                                <p>{item}</p>
                            </li>
                        ))
                    }
                </ul>
            )

            }
        </div>
    );
}

export default CardAbout;

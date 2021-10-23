import React from 'react';
import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';



function NormalLists(
    title,
    emoji,
    description,
) {
    return (
        <div className="container mx-auto mt-8 px-8">

            <h3 className="font-mono text-2xl font-bold">{title}</h3>
            <hr className="my-2" />

            <ul className="list-disc">
                <li>
                    <Emoji emoji={emoji} size={30} />&nbsp;
                    {description}
                </li>
            </ul>

        </div>
    )
}


export default NormalLists
import React from 'react';
import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { LineStyle } from '@material-ui/icons';


interface Line {
    emoji: string,
    description: string,
}

interface Content {
    title: string,
    lines: Line[],
}

function NormalLists(
    // content: content,
    title: string,
    // lines: Line[],
    emoji: string,
    description: string,
) {
    return (
        <div className="container mx-auto mt-8 px-8">

            <h3 className="font-mono text-2xl font-bold">{title}</h3>
            <hr className="my-2" />

            <ul className="list-disc">
                {/* {lines.map((line) =>
                    <li>
                        <Emoji emoji={line.emoji} size={30} />&nbsp;
                        {line.description}
                    </li>
                )} */}

                <li>
                    <Emoji emoji={emoji} size={30} />&nbsp;
                    {description}
                </li>

            </ul>

        </div>
    )
}


export default NormalLists
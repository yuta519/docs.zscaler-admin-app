import React from 'react';
import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

interface Line {
  emoji: string,
  description: string,
}

interface Props {
  readonly title: string,
  readonly lines: Line[],
}

const NormalLists: React.FC<Props> = ({
  title,
  lines,
}: Props) => (
  <div className="container mx-auto mt-8 px-8">

    <h3 className="font-mono text-2xl font-bold">{title}</h3>
    <hr className="my-2" />

    <ul className="list-disc">
      {lines.map((line: Line) =>
        <li>
          <Emoji emoji={line.emoji} size={30} />&nbsp;
          {line.description}
        </li>
      )}
    </ul>
  </div>
)

export default NormalLists

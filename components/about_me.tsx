import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';



export default function AboutMe() {
    return (
        <div className="container mx-auto mt-8 px-8">

            <h3 className="font-mono text-2xl font-bold">About Me</h3>
            <hr className="my-2" />

            <ul className="list-disc">
                <li>
                    <Emoji emoji="jp" size={30} />&nbsp;
                    Japanese Software Engineer - Server Side (Python, FastAPI, Django, Go) / Client Side (Javascript, Typescript, React, Next.js)
                </li>
                <li>
                    <Emoji emoji="tokyo_tower" size={30} />
                    Live in Tokyo
                </li>
            </ul>

            <p className="mx-auto mt-2">
                <a href="https://www.linkedin.com/in/yuta519/">LinkedIn &nbsp;</a>
                <a href="https://github.com/yuta519">&nbsp; Github</a>
            </p>

        </div>
    )
}


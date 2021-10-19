import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';



export default function AboutMe() {
    return (
        <div className="container mx-auto px-8">
            {/* <h1 className="text-4xl font-bold text-center">About Me</h1> */}

            <h3 className="font-mono text-2xl font-bold">About Me</h3>
            <hr className="my-2" />

            <ul className="list-disc">
                <li>
                    <Emoji emoji="jp" size={30} />
                    Japanese Software Engineer - Client Side (Javascript, Typescript, React, Next.js) / Server Side (Python, FastAPI, Django, Go)
                </li>
                <li>
                    <Emoji emoji="tokyo_tower" size={30} />
                    Live in Tokyo
                </li>
            </ul>
        </div>
    )
}


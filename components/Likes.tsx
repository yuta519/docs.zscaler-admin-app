import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';



export default function Likes() {
    return (
        <div className="container mx-auto mt-8 px-8">

            <h3 className="font-mono text-2xl font-bold">Likes</h3>
            <hr className="my-2" />

            <ul className="list-disc">
                <li>
                    <Emoji emoji="computer" size={30} />&nbsp;
                    Backend / Server side skills - Especially, Python / FastAPI / Django / Go
                </li>
                <li>
                    <Emoji emoji="busts_in_silhouette" size={30} />&nbsp;
                    Collaboration - Software development is a team sport, I think.
                </li>
                <li>
                    <Emoji emoji="sparkles" size={30} />&nbsp;
                    Clean Architecture - Readable code and structure are always beautiful.
                </li>
            </ul>

        </div>
    )
}


import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import NormalLists from '@/components/NormalLists';



export default function Likes() {
    const title: string = "Likes / Interests"
    const lines: { emoji: string; description: string }[] = [
        {
            emoji: "computer",
            description: "Backend / Server side skills - Especially, Python / FastAPI / Django / Go"
        },
        {
            emoji: "busts_in_silhouette",
            description: "Collaboration - Software development is a team sport, I think."
        },
        {
            emoji: "sparkles",
            description: "Clean Architecture - Readable code and structure are always beautiful."
        },
    ]
    return (
        <NormalLists title={title} lines={lines} />
    )
}


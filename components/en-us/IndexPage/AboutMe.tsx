import NormalLists from '@/components/Atoms/NormalLists';


export default function AboutMe() {
    const title: string = "Who is Yuta Kawamura"
    const lines: { emoji: string; description: string }[] = [
        {
            emoji: "jp",
            description: "Japanese Software Engineer - Server Side (Python, FastAPI, Django, Go) / Client Side (Javascript, Typescript, React, Next.js)"
        },
        {
            emoji: "tokyo_tower",
            description: "Live in Tokyo"
        },
    ]
    return (
        <>
            <p className="mx-auto mt-2">
                <a href="https://www.linkedin.com/in/yuta519/">LinkedIn &nbsp;</a>
                <a href="https://github.com/yuta519">&nbsp; Github</a>
            </p>
            <NormalLists title={title} lines={lines} />
        </>
    )
}


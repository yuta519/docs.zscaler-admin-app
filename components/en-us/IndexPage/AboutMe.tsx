import NormalLists from '@/components/Atoms/NormalLists';


const AboutMe: React.VFC = () => {
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
    <NormalLists title={title} lines={lines} />
  )
}

export default AboutMe

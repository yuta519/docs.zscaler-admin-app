import NormalLists from '@/components/Atoms/NormalLists';


const AboutMe: React.VFC = () => {
  const title: string = "Who is Yuta Kawamura"
  const lines: { emoji: string; description: string }[] = [
    {
      emoji: "jp",
      description: "Software Engineer in Japan"
    },
    {
      emoji: "tokyo_tower",
      description: "Live in Tokyo"
    },
    {
      emoji: "wrench",
      description: "Python, FastAPI, Django, Go",
      // description: "Server Side - Python, FastAPI, Django, Go",
    },
    {
      emoji: "globe_with_meridians",
      description: "Typescript, React, Next.js",
      // description: "Client Side - Javascript, Typescript, React, Next.js",
    },
  ]
  return (
    <NormalLists title={title} lines={lines} />
  )
}

export default AboutMe

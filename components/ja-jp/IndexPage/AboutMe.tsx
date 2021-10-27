import NormalLists from '@/components/Atoms/NormalLists';


const AboutMe: React.VFC = () => {

  const title: string = "川村 優太って？"
  const lines: { emoji: string; description: string }[] = [
    {
      emoji: "jp",
      description: "日本でエンジニアしてます！ - サーバサイド (Python, FastAPI, Django, Go) / クライアントサイド (Javascript, Typescript, React, Next.js)"
    },
    {
      emoji: "tokyo_tower",
      description: "東京在住"
    },
  ]

  return (
    <NormalLists title={title} lines={lines} />
  )
}

export default AboutMe

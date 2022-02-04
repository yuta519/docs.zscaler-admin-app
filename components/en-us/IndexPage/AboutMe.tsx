import Image from 'next/image';
import NormalLists from '@/components/Atoms/NormalLists';
import ProfilePhoto from '@/public/profile.jpg'


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
      description: "Server Side (Python, FastAPI, Django, Go) / Client Side (Javascript, Typescript, React, Next.js)",
    },

  ]
  return (
    <>
      <div className="flex justify-center">
        <Image src={ProfilePhoto} width={2000} height={700} objectFit="contain" />
      </div>
      <NormalLists title={title} lines={lines} />
    </>
  )
}

export default AboutMe

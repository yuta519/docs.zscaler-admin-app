import Card from '@/components/Atoms/Card';

const Projects: React.VFC = () => {
  return (
    <div className="p-4">
      <p className="font-mono font-bold sm:text-base md:text-3xl">Projects</p>
      <hr className="my-2" />

      <div className='my-5 md:flex'>
        <Card
          img='https://raw.githubusercontent.com/yuta519/yuta519.github.io/main/public/projects/yuta519.github.io.png'
          cardName='yuta519.github.io (This website)'
          cardDescription='My profile site. Including not only profile, but also blogs I wrote.'
          tags={['Next.js', 'Typescript']}
        />
        <Card
          img='https://raw.githubusercontent.com/yuta519/yuta519.github.io/main/public/projects/Notion_app_logo.png'
          cardName='Notion API SDK'
          cardDescription='Notion SDK for Golang.'
          tags={["Go", "Notion API"]}
        />
        <Card
          img='https://raw.githubusercontent.com/yuta519/yuta519.github.io/main/public/projects/Zscaler.png'
          cardName='Zscaler Python SDK'
          cardDescription='Zscaler SDK for Python.'
          tags={["Pyhon", "Zscaler"]}
        />
      </div>
      {/* <p className='text-blue-400 md:text-base sm:text-xs'><Link href="/projects">more</Link></p> */}
    </div>
  )
}

export default Projects

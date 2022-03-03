import Link from 'next/link';
import Project from '@/components/Atoms/Project';

const Projects: React.VFC = () => {
  return (
    <div className="p-4">
      <p className="font-mono font-bold sm:text-base md:text-2xl">Projects</p>
      <hr className="my-2" />

      <div className='my-5 md:flex'>
        <Project
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          projectName='yuta519.github.io (This website)'
          projectDescription='project project project project '
          tags={[]}
        />
        <Project
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          projectName='Notion API SDK'
          projectDescription='project project project project '
          tags={[]}
        />
        <Project
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          projectName=''
          projectDescription='project project project project '
          tags={[]}
        />
      </div>
      <div className='my-5 md:flex'>
        <Project
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          projectName='Zscaler Python SDK'
          projectDescription='project project project project '
          tags={[]}
        />
        <Project
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          projectName='Zscaler Golang SDK'
          projectDescription='project project project project '
          tags={[]}
        />
        <Project
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          projectName=''
          projectDescription='project project project project '
          tags={[]}
        />
      </div>
      <p className='text-blue-400 md:text-base sm:text-xs'><Link href="/blogs">more</Link></p>
    </div>
  )
}

export default Projects

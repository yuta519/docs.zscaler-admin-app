import Link from 'next/link';
import Project from '@/components/Atoms/Project';

const Projects: React.VFC = () => {
  return (
    <div className="p-4">
      <p className="font-mono font-bold sm:text-base md:text-2xl">Projects</p>
      <hr className="my-2" />

      <div className='my-5 md:flex'>
        <Project
          img='https://raw.githubusercontent.com/yuta519/yuta519.github.io/feat/new_work_design/public/projects/yuta519.github.io.png'
          projectName='yuta519.github.io (This website)'
          projectDescription='My profile site. Including not only profile, but also blogs I wrote.'
          tags={['Next.js', 'Typescript']}
        />
        <Project
          img='https://raw.githubusercontent.com/yuta519/yuta519.github.io/feat/new_work_design/public/projects/Notion_app_logo.png'
          projectName='Notion API SDK'
          projectDescription='Notion SDK for Golang.'
          tags={["Go", "Notion API"]}
        />
        <Project
          img='https://raw.githubusercontent.com/yuta519/yuta519.github.io/feat/new_work_design/public/projects/Zscaler.png'
          projectName='Zscaler Python SDK'
          projectDescription='Zscaler SDK for Python.'
          tags={["Pyhon", "Zscaler"]}
        />
        <Project
          img='https://raw.githubusercontent.com/yuta519/yuta519.github.io/feat/new_work_design/public/projects/Zscaler.png'
          projectName='Zscaler Golang SDK'
          projectDescription='Zscaler SDK for Golang.'
          tags={["Go", "Zscaler"]}
        />
      </div>
      {/* <div className='my-5 md:flex'>
        <Project
          img='https://raw.githubusercontent.com/yuta519/yuta519.github.io/feat/new_work_design/public/projects/Zscaler.png'
          projectName='Zscaler Golang SDK'
          projectDescription='project project project project '
          tags={["Go", "Zscaler"]}
        />
      </div>
      <p className='text-blue-400 md:text-base sm:text-xs'><Link href="/projects">more</Link></p> */}
    </div>
  )
}

export default Projects

import Project from '@/components/Atoms/Project';

const Projects: React.VFC = () => {
  return (
    <div className="p-4">
      <p className="font-mono font-bold sm:text-base md:text-2xl">Projects</p>
      <hr className="my-2" />

      <div className='mg-top-5'>
        <Project
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          projectName='project1'
          projectDescription='project project project project '
        />
      </div>


    </div>
  )
}

export default Projects

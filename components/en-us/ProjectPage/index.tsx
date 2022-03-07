import { useEffect, useState } from 'react'

interface Propos {
  readonly projectName: string | string[],
}

const Projects = ({ projectName }: Propos) => {
  const [projectDetail, setProjectDetail] = useState("")
  useEffect(() => {
    const projectJson = require('./projects.json')
    setProjectDetail(projectJson)
  }, [])
  console.log(projectDetail)
  return (
    <div className="grid grid-flow-col grid-cols-10">
      <div className="col-span-1"></div>
      <div className="col-span-7 flex-col container mx-auto mt-8 pr-8 sm:pr-2 justify-center">
      </div>
      <div className="col-span-2 pr-5">
      </div>
    </div>
  )
}

export default Projects

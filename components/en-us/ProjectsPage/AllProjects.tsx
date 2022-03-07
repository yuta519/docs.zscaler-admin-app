import { useEffect, useState } from "react"
import Card from "@/components/Atoms/Card"

interface Project {
  readonly name: string,
  readonly shortDescription: string
  readonly description: string
  readonly imageUrl: string,
  readonly relatedBlogs: string[],
  readonly usingStacks: string[],
}

const split = (array, n) => array.reduce((a, c, i) => i % n == 0 ? [...a, [c]] : [...a.slice(0, -1), [...a[a.length - 1], c]], [])

const AllProjects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const projectJson = require('../ProjectPage/projects.json')
    setProjects(split(projectJson["projects"], 3))
  }, [])

  return (
    <>
      <div className="flex container mx-auto my-8 sm:pr-2 justify-center">
        {projects.map((projectList: Project[], index: number) => {
          projectList.map((project: Project) => {
            console.log(project["name"])
            console.log("hogehoge")
            return (
              <Card
                img={project["imageUrl"]}
                cardName={project["name"]}
                cardDescription={project["shortDescription"]}
                tags={project["usingStacks"]}
              />
            )
          })
          return (
            <div className="flex container mx-auto my-8 sm:pr-2 justify-center">
              {projectList[0]["name"]}
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default AllProjects

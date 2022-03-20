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

const split = (array: number[], num: number) => {
  return array.reduce((a, c, i) => i % num == 0 ? [...a, [c]] : [...a.slice(0, -1), [...a[a.length - 1], c]], [])
}

const AllProjects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const projectJson = require('../ProjectPage/projects.json')
    setProjects(split(projectJson["projects"], 3))
  }, [])

  return (
    <>
      {projects.map((projectList: Project[]) => {
        return (
          <div className="flex container mx-auto my-8 sm:pr-2 justify-center">
            {projectList.map((project: Project) => {
              const href = "/projects/" + project["id"]
              return (
                <Card
                  img={project["imageUrl"]}
                  cardName={project["name"]}
                  cardLink={href}
                  cardDescription={project["shortDescription"]}
                  tags={project["usingStacks"]}
                />
              )
            })}
          </div>
        )
      })
      }
    </>
  )
}

export default AllProjects

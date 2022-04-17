import { useEffect, useState } from "react";
import Card from "@/components/Atoms/Card";

interface Props {
  readonly projectType: string;
}

interface Project {
  readonly name: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly relatedBlogs: string[];
  readonly usingStacks: string[];
  readonly projectType: string;
}

const split = (array: number[], num: number) => {
  return array.reduce(
    (a, c, i) =>
      i % num == 0 ? [...a, [c]] : [...a.slice(0, -1), [...a[a.length - 1], c]],
    []
  );
};

const AllProjects = ({ projectType }: Props) => {
  const [projects, setProjects] = useState([]);
  const [type, setType] = useState("work");
  const projectJson = require("../ProjectPage/projects.json");

  useEffect(() => {
    const filteredProjectJson = projectJson.filter((project) => {
      return project.projectType === projectType;
    });
    setProjects(split(filteredProjectJson, 3));
  }, [projectType]);

  return (
    <>
      {type !== projectType ? setType(projectType) : ""}
      {projects.map((projectList: Project[]) => {
        return (
          <div className="md:flex sm-flex container mx-auto my-8 sm:pr-2 justify-center">
            {projectList.map((project: Project) => {
              return (
                <Card
                  img={project["imageUrl"]}
                  cardName={project["name"]}
                  cardLink={"/projects/" + project["id"]}
                  cardDescription={project["shortDescription"]}
                  tags={project["usingStacks"]}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default AllProjects;

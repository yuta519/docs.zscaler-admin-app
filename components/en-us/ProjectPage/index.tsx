import { useEffect, useState } from "react";

import Header from "@/components/Atoms/Header";
import Footer from "@/components/Atoms/Footer";
import ProjectDetail from "@/components/en-us/ProjectPage/ProjectDetail";

interface Props {
  readonly projectName: string | string[];
}

const Projects = ({ projectName }: Props) => {
  const [projectDetail, setProjectDetail] = useState();
  useEffect(() => {
    const projectJson = require("./projects.json");
    const project = projectJson.find(
      (projects: { id: string | string[] }) => projects.id == projectName
    );
    setProjectDetail(project);
  }, []);
  return (
    <>
      <Header />
      <ProjectDetail projectDetail={projectDetail} />
      <Footer />
    </>
  );
};

export default Projects;

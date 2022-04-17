import { useState } from "react";

import Header from "@/components/Atoms/Header";
import Footer from "@/components/Atoms/Footer";
import AllProjects from "@/components/en-us/ProjectsPage/AllProjects";
import ProjectTypeTab from "@/components/en-us/ProjectsPage/ProjectTypeTab";

const Projects: React.FC = () => {
  const [projectType, setProjectType] = useState("");

  const toggleProjectTypeTab = (type: string) => {
    setProjectType(type);
  };

  return (
    <>
      <Header />
      <ProjectTypeTab onChange={toggleProjectTypeTab} />
      <AllProjects projectType={projectType} />
      <Footer />
    </>
  );
};

export default Projects;

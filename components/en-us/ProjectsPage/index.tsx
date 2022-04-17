import Header from "@/components/Atoms/Header";
import Footer from "@/components/Atoms/Footer";
import AllProjects from "@/components/en-us/ProjectsPage/AllProjects";
import ProjectTypeTab from "@/components/en-us/ProjectsPage/ProjectTypeTab";

const Projects: React.FC = () => {
  return (
    <>
      <Header />
      <ProjectTypeTab />
      <AllProjects />
      <Footer />
    </>
  );
};

export default Projects;

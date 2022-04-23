import HeadComponent from "../components/HeadComponent";
import ProjectHead from "../components/Project/ProjectHead";
import ProjectList from "../components/Project/ProjectList";

function Projects() {
  return (
    <>
      <HeadComponent value="Projects" />
      <ProjectHead />
      <ProjectList />
    </>
  );
}

export default Projects;

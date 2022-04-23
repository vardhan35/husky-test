import ProjectCard from "./ProjectCard";
import styles from "../../styles/Project.module.css";
import { Data } from "../../public/Data";

const ProjectList = () => {
  return (
    <div className={styles.project_list}>
      {Data.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
};

export default ProjectList;

import styles from "../../styles/Project.module.css";
import Link from "next/link";

const ProjectCrd = ({ project }) => {
  return (
    <div key={project.id} className={styles.card}>
      <div className={styles.card_left}>
        <img src={project.img} className={styles.card_left_img} />
      </div>
      <div className={styles.card_right}>
        <header className={styles.card_header}>
          <h2>{project.name}</h2>
        </header>
        <div className={styles.project_info}>
          <p className={styles.project_info_para}>{project.discription}</p>
        </div>
        <div className={styles.project_action}>
          <div className={styles.link}>
            <Link href={`${project.weblink}`}>
              <button className={styles.btn_project}>Live Website</button>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href={`${project.githublink}`} className={styles.img}>
              <button className={styles.btn_code}>Project Code</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCrd;

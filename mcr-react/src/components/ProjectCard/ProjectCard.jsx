import React from 'react';

import styles from './ProjectCard.module.css';


const ProjectCard = (props) => {
    const {src, title, description} = props;

  return (
    <div className={`${styles.projectItem} col-lg-4 col-md-6 col-sm-12 my-3`}>
        <div className={styles.projectImg}>
            <img id="image" src={src} alt=""  data-bs-toggle="modal" data-bs-target="#exampleModal" data-index="2"/>
        </div>
        <h5 className="mt-2">{title}</h5>
        <p className="d-none">{description}</p>
    </div>
  )
}

export default ProjectCard;
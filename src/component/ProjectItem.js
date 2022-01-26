import React, { useRef } from "react";
import ProjectItemImage from "./ProjectItemImage";
import ProjectItemText from "./ProjectItemText";

export default function ProjectItem({ projects }) {
  let counter = useRef(0);
  return (
    <>
      {projects.map((project) => {
        counter.current += 1;
        if (counter.current % 2 === 1) {
          return (
            <div key={project.id} className="project-item">
              <ProjectItemImage
                image={project.image}
                link={project.link}
              />
              <ProjectItemText
                name={project.name}
                content={project.content}
                icons={project.icons}
              />
            </div>
          );
        } else {
          return (
            <div key={project.id} className="project-item">
              <ProjectItemText
                name={project.name}
                content={project.content}
                icons={project.icons}
              />
              <ProjectItemImage
                image={project.image}
                link={project.link}
              />
            </div>
          );
        }
      })}
    </>
  );
}

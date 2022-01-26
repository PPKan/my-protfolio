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
            <div className="project-item">
              <ProjectItemImage
                key={project.id}
                image={project.image}
                link={project.link}
              />
              <ProjectItemText
                key={project.id}
                name={project.name}
                content={project.content}
                icons={project.icons}
              />
            </div>
          );
        } else {
          return (
            <div className="project-item">
              <ProjectItemText
                key={project.id}
                name={project.name}
                content={project.content}
                icons={project.icons}
              />
              <ProjectItemImage
                key={project.id}
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

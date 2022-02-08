import React, { useRef, useMemo, useEffect } from "react";
import ProjectItemImage from "./ProjectItemImage";
import ProjectItemText from "./ProjectItemText";

export default function ProjectItem({ projects }) {
  let counter = useRef(-1);

  const targetRef = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("slide-in");
        }
      });
    }, options);
    
    targetRef.current.forEach((target) => {
      observer.observe(target.current);
    });
  }, [options]);

  return (
    <>
      {projects.map((project) => {
        counter.current += 1;
        if (counter.current % 2 === 1) {
          return (
            <div
              key={project.id}
              className="project-item"
              ref={targetRef.current[counter.current]}
            >
              <ProjectItemImage image={project.image} link={project.link} />
              <ProjectItemText
                name={project.name}
                content={project.content}
                icons={project.icons}
              />
            </div>
          );
        } else {
          return (
            <div
              key={project.id}
              className="project-item"
              ref={targetRef.current[counter.current]}
            >
              <ProjectItemText
                name={project.name}
                content={project.content}
                icons={project.icons}
              />
              <ProjectItemImage image={project.image} link={project.link} />
            </div>
          );
        }
      })}
    </>
  );
}

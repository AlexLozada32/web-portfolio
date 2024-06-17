import { useState } from "react";
import projects from "../../constants/projects";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex();
  };

  const prevSlide = () => {
    setCurrentIndex();
  };

  return (
    <section id="projects" className="card-template relative">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PROJECTS
      </h1>

      <div className="flex h-fit justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`h-fit w-[250px] rounded-xl bg-red-600 ${index !== projects.length - 1 ? "mr-4" : ""}`}
          >
            <img
              src={project.img}
              alt={project.alt}
              className="h-2/5 w-full rounded-t-xl object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold">{project.title}</h1>
              <p>{project.description}</p>
              <div className="flex justify-between">
                <button>Live Link</button>
                <button>Source Code</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-20 top-1/2 text-4xl"
      >
        →
      </button>
      <button onClick={prevSlide} className="absolute left-20 top-1/2 text-4xl">
        ←
      </button>
    </section>
  );
};

export default Projects;

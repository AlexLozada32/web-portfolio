import { useState } from "react";
import projects from "../../../constants/projectsData";

const Carousel = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <div className="relative hidden lg:flex lg:items-end lg:justify-center">
        <div className="mr-4 h-52 w-52 rounded-lg bg-red-600">
          <img src="" alt="" />
          <h2>
            {
              projects[(currentProject - 1 + projects.length) % projects.length]
                .title
            }
          </h2>
        </div>

        <div className="mr-4 h-fit w-80 rounded-lg bg-green-600">
          <img
            src={`https://via.placeholder.com/400x300.png?text=${projects[currentProject].title}`}
            alt=""
            className="rounded-t-lg"
          />
          <div className="p-2">
            <h1 className="text-xl font-bold">
              {projects[currentProject].title}
            </h1>
            <p className="mb-2 hidden md:block">
              {projects[currentProject].description}
            </p>
            <div className="flex items-center justify-between">
              <a href="#" className="rounded bg-blue-600 p-2 text-white">
                Live Link
              </a>
              <a href="#" className="rounded bg-blue-600 p-2 text-white">
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="h-52 w-52 rounded-lg bg-red-600">
          <img src="" alt="" />
          <h2>{projects[(currentProject + 1) % projects.length].title}</h2>
        </div>
        
        <button
          onClick={handlePrevProject}
          className="absolute hidden text-4xl lg:left-32 lg:top-2/4 lg:block"
        >
          ←
        </button>
        <button
          onClick={handleNextProject}
          className="absolute hidden text-4xl lg:right-32 lg:top-2/4 lg:block"
        >
          →
        </button>
      </div>
    </>
  );
};

export default Carousel;

import { useState } from "react";
import projects from "../../constants/projectsData";
import { ProjectsCard, MoreComingSoon } from "../../constants/compExport";

const Carousel = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrevProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  const handleNextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  return (
    <>
      <div className="relative hidden lg:flex lg:items-end lg:justify-center">
        {/* LEFT CARD */}
        <div className="mr-4 h-64 w-64 rounded-lg bg-cardColor">
          {projects[(currentProject - 1 + projects.length) % projects.length]
            .title !== "More coming soon!" ? (
            <>
              <img
                src={
                  projects[
                    (currentProject - 1 + projects.length) % projects.length
                  ].img
                }
                alt={
                  projects[
                    (currentProject - 1 + projects.length) % projects.length
                  ].title
                }
                className="rounded-t-lg"
              />
              <div className="p-2">
                <h2 className="flex justify-center text-xl font-bold">
                  {
                    projects[
                      (currentProject - 1 + projects.length) % projects.length
                    ].title
                  }
                </h2>
              </div>
            </>
          ) : (
            <img
              src={
                projects[
                  (currentProject - 1 + projects.length) % projects.length
                ].img
              }
              alt={
                projects[
                  (currentProject - 1 + projects.length) % projects.length
                ].title
              }
              className="rounded-lg"
            />
          )}
        </div>

        {/* CENTER CARD */}
        {projects[currentProject].title !== "More coming soon!" ? (
          <ProjectsCard projects={projects} currentProject={currentProject} />
        ) : (
          <MoreComingSoon projects={projects} currentProject={currentProject} />
        )}

        {/* RIGHT CARD */}
        <div className="h-64 w-64 rounded-lg bg-cardColor">
          {projects[(currentProject + 1) % projects.length].title !==
          "More coming soon!" ? (
            <>
              <img
                src={projects[(currentProject + 1) % projects.length].img}
                alt={projects[(currentProject + 1) % projects.length].title}
                className="rounded-t-lg"
              />
              <div className="p-2">
                <h2 className="flex justify-center text-xl font-bold">
                  {projects[(currentProject + 1) % projects.length].title}
                </h2>
              </div>
            </>
          ) : (
            <img
              src={projects[(currentProject + 1) % projects.length].img}
              alt={projects[(currentProject + 1) % projects.length].title}
              className="rounded-lg"
            />
          )}
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

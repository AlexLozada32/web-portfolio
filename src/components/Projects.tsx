import { Carousel } from "../constants/compExport";
import projects from "../constants/projectsData";
import { media } from "../../public/media";

const Projects = () => {
  return (
    <section id="projects" className="card-template">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PROJECTS
      </h1>

      <div className="flex flex-col items-center lg:hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-4 h-fit w-full rounded-lg bg-cardColor"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-t-lg"
            />
            <div className="p-2">
              <h2 className="text-lg font-bold">{project.title}</h2>
              {project.title !== "More coming soon!" ? (
                <>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex justify-around">
                    <button className="rounded-lg bg-buttonColor px-4 py-2">
                      <a href={project.liveLink}>Live Link</a>
                    </button>
                    <button className="flex items-center rounded-lg bg-buttonColor px-4 py-2">
                      <img
                        src={media.github}
                        alt="github"
                        className="mr-2 h-5 w-5"
                      />
                      <a
                        href={project.githubLink}
                        className="font-bold tracking-wider"
                      >
                        Code
                      </a>
                    </button>
                  </div>
                </>
              ) : (
                <p>{project.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Carousel />
    </section>
  );
};

export default Projects;

import projects from "../../constants/projects";

const Projects = () => {
  return (
    <section className="card-template">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PROJECTS
      </h1>

      <div className="px-4 pb-4">
        {projects.map((project, index) => (
          <div key={index} className="h-96 rounded-xl bg-regalBlue">
            <img
              src={project.img}
              alt={project.alt}
              className="h-3/5 w-full rounded-t-xl"
            />
            <div className="flex flex-col items-center p-4">
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p>{project.description}</p>
              <div className="flex justify-end">
                <a href={project.liveLink}>Live link</a>
                <a href={project.githubLink}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

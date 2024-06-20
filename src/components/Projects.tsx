import { Carousel } from "../../constants/compExport";

const Projects = () => {
  return (
    <section id="projects" className="card-template">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PROJECTS
      </h1>

      <div className="lg:hidden">
        <p className="mb-4 text-sm sm:text-base">
          Here are some of the projects I have worked on. Click on the images to
          view the project.
        </p>
      </div>

      <Carousel />
    </section>
  );
};

export default Projects;

import { media } from "../../../public/media";

type ProjectsCardProps = {
  projects: {
    img: string;
    title: string;
    description: string;
    liveLink: string;
    githubLink: string;
  }[];
  currentProject: number;
};

const ProjectsCard = ({ projects, currentProject }: ProjectsCardProps) => {
  return (
    <div className="mr-4 flex h-[420px] w-[390px] flex-col rounded-lg bg-cardColor">
      <img
        src={projects[currentProject].img}
        alt={projects[currentProject].title}
        className="h-3/5 w-full rounded-t-lg"
      />

      <div className="flex h-full flex-col justify-between p-2">
        <h1 className="text-xl font-bold">{projects[currentProject].title}</h1>
        <p>{projects[currentProject].description}</p>
        <div className="flex justify-around">
          <button className="cursor-pointer rounded-lg bg-buttonColor px-4 py-2">
            <a
              href={projects[currentProject].liveLink}
              className="font-bold tracking-wider"
            >
              Live Link
            </a>
          </button>
          <button className="flex cursor-pointer items-center rounded-lg bg-buttonColor px-4 py-2">
            <img src={media.github} alt="github" className="mr-2 h-5 w-5" />
            <a
              href={projects[currentProject].githubLink}
              className="font-bold tracking-wider"
            >
              Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

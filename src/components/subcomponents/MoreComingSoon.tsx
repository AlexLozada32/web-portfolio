type MoreComingSoonProps = {
  projects: {
    img: string;
    title: string;
    description: string;
  }[];
  currentProject: number;
};

const MoreComingSoon = ({ projects, currentProject }: MoreComingSoonProps) => {
  return (
    <div className="mr-4 flex h-[420px] w-[320px] flex-col rounded-lg bg-cardColor">
      <img
        src={projects[currentProject].img}
        alt={projects[currentProject].title}
        className="rounded-t-lg"
      />

      <div className="flex h-full flex-col justify-between p-2">
        <h1 className="text-xl font-bold">{projects[currentProject].title}</h1>
        <p>{projects[currentProject].description}</p>
      </div>
    </div>
  );
};

export default MoreComingSoon;

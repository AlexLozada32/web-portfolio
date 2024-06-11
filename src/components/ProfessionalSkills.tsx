import { ProfessionalSkillsList } from "../../constants/compExport";

const ProfessionalSkills = () => {
  return (
    <section className="card-template overflow-scroll md:ml-0 lg:ml-0">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PROFESSIONAL <span className="text-coralSunset">SKILLS</span>
      </h1>
      {/* <p className="mb-3">
        Here's a snapshot of the tools and technologies I've been working with
        lately. I'm always eager to learn new things and expand my skill set, so
        stay tuned for more!
      </p> */}
      <ProfessionalSkillsList />
    </section>
  );
};

export default ProfessionalSkills;

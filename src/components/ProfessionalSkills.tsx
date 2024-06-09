import { ProfessionalSkillsList } from "../../constants/compExport";

const ProfessionalSkills = () => {
  return (
    <section className="mx-4 mb-4 h-fit overflow-scroll rounded-xl bg-twilightIndigo p-4 md:mx-8 md:ml-0 md:max-h-[720px] lg:mx-12 lg:ml-0">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PROFESSIONAL <span className="text-coralSunset">SKILLS</span>
      </h1>
      <p className="mb-3">
        Here's a snapshot of the tools and technologies I've been working with
        lately. I'm always eager to learn new things and expand my skill set, so
        stay tuned for more!
      </p>
      <ProfessionalSkillsList />
    </section>
  );
};

export default ProfessionalSkills;

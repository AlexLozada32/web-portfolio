import { ProfessionalSkillsList } from "../../constants/compExport";

const ProfessionalSkills = () => {
  return (
    <section className="card-template overflow-scroll md:h-[700px] md:ml-0 lg:ml-0">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PROFESSIONAL <span className="text-coralSunset">SKILLS</span>
      </h1>

      <ProfessionalSkillsList />
    </section>
  );
};

export default ProfessionalSkills;

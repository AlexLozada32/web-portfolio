import { PersonalSkillsList } from "../../constants/compExport";

const PersonalSkills = () => {
  return (
    <section id="skills" className="card-template md:h-[700px] md:mr-0 lg:mr-0">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PERSONAL <span className="text-coralSunset">SKILLS</span>
      </h1>

      <PersonalSkillsList />
    </section>
  );
};

export default PersonalSkills;

import { PersonalSkillsList } from "../constants/compExport";

const PersonalSkills = () => {
  return (
    <section id="skills" className="card-template md:mr-0 md:h-[700px] lg:mr-0">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PERSONAL <span className="text-orangeTone">SKILLS</span>
      </h1>

      <PersonalSkillsList />
    </section>
  );
};

export default PersonalSkills;

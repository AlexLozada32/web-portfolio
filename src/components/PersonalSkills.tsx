import { PersonalSkillsList } from "../../constants/compExport";

const PersonalSkills = () => {
  return (
    <section id="skills" className="card-template md:mr-0 lg:mr-0">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PERSONAL <span className="text-coralSunset">SKILLS</span>
      </h1>
      {/* <p className="mb-3">
        Here are some of the personal skills I've developed over the years that
        help me navigate the world of coding and beyond.
      </p> */}
      <PersonalSkillsList />
    </section>
  );
};

export default PersonalSkills;

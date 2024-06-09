import { PersonalSkillsList } from "../../constants/compExport";

const PersonalSkills = () => {
  return (
    <section className="mx-4 mb-4 max-h-[720px] rounded-xl bg-twilightIndigo p-4 md:mx-8 md:mr-0 lg:mx-12 lg:mr-0">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        PERSONAL <span className="text-coralSunset">SKILLS</span>
      </h1>
      <p className="mb-3">
        Here are some of the personal skills I've developed over the years that
        help me navigate the world of coding and beyond.
      </p>
      <PersonalSkillsList />
    </section>
  );
};

export default PersonalSkills;

import { professionalSkills } from "../../../constants/skills";

const ProfessionalSkillsList = () => {
  return (
    <section>
      {professionalSkills.map((skill, index) => (
        <div key={index}>
          <h2 className="mb-2 text-lg font-semibold">{skill.category}</h2>
          <ul
            className={`flex flex-wrap gap-4 ${index !== professionalSkills.length - 1 ? "mb-4" : ""}`}
          >
            {skill.items.map((item, index) => (
              <li
                key={index}
                className="flex h-32 w-24 transform flex-col justify-center rounded-xl bg-sapphireSky text-center transition duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-custom-glow"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="mb-2 h-12 w-auto"
                />
                <p className="font-bold">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ProfessionalSkillsList;

import { personalSkills } from "../../constants/skillsData";

const PersonalSkillsList = () => {
  return (
    <ul>
      {personalSkills.map((item, index) => (
        <li
          key={index}
          className={index !== personalSkills.length - 1 ? "mb-4" : ""}
        >
          <h2 className="mb-2 text-lg font-semibold">{item.skill}</h2>
          <div className="h-6 w-full rounded-full bg-gray-400">
            <div
              className="flex h-full items-center justify-center rounded-full bg-gradient-to-r from-startingBarColor to-buttonColor italic"
              style={{ width: `${item.percent}%` }}
            >
              {item.percent}%
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PersonalSkillsList;

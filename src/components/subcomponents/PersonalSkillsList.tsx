const PersonalSkillsList = () => {
  const skillsData = [
    { skill: "Communication", percent: 100 },
    { skill: "Teamwork", percent: 90 },
    { skill: "Adaptability", percent: 80 },
    { skill: "Attention to Detail", percent: 100 },
    { skill: "Time Management", percent: 100 },
    { skill: "Creativity", percent: 60 },
    { skill: "Self-Motivation", percent: 80 },
    { skill: "Critical Thinking", percent: 90 },
  ];

  const skills = skillsData.map((item, index) => (
    <li key={index} className={index !== skillsData.length - 1 ? "mb-4" : ""}>
      <h2 className="mb-1 text-lg font-semibold">{item.skill}</h2>
      <div className="h-6 w-full rounded-full bg-gray-400">
        <div
          className="from-whisperingAzure flex h-full items-center justify-center rounded-full bg-gradient-to-r to-regalBlue italic"
          style={{ width: `${item.percent}%` }}
        >
          {item.percent}%
        </div>
      </div>
    </li>
  ));
  return <ul>{skills}</ul>;
};

export default PersonalSkillsList;

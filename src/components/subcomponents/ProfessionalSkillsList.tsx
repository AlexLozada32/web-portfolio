import { media } from "../../../constants/media";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "HTML", img: media.html },
      { name: "CSS", img: media.css },
      { name: "JavaScript", img: media.js },
      { name: "TypeScript", img: media.ts },
    ],
  },
  {
    category: "Frontend Frameworks/Libraries",
    items: [
      { name: "React", img: media.react },
      { name: "Next.js", img: media.nextjs },
      { name: "Tailwind CSS", img: media.tailwind },
      { name: "Sass", img: media.sass },
    ],
  },
  {
    category: "Testing Frameworks",
    items: [
      { name: "Jest", img: media.jest },
      { name: "Mocha", img: media.mocha },
    ],
  },
  {
    category: "Backend Frameworks/Libraries",
    items: [{ name: "Node.js", img: media.nodejs }],
  },
  {
    category: "Package Manager",
    items: [{ name: "npm", img: media.npm }],
  },
  {
    category: "Version Control",
    items: [
      { name: "Git", img: media.git },
      { name: "GitHub", img: media.github },
    ],
  },
  {
    category: "API Testing",
    items: [{ name: "Postman", img: media.postman }],
  },
  {
    category: "Code Editors/IDEs",
    items: [
      { name: "VS Code", img: media.vscode },
      { name: "vim", img: media.vim },
    ],
  },
];

const ProfessionalSkillsList = () => {
  return (
    <section>
      {skills.map((skill, index) => (
        <div key={index}>
          <h2 className="mb-2 text-lg font-semibold">{skill.category}</h2>
          <ul
            className={`flex flex-wrap gap-4 ${index !== skills.length - 1 ? "mb-4" : ""}`}
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

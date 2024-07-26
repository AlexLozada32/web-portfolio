import { media } from "../../public/media";

// PERSONAL SKILLS DATA
export const personalSkills = [
  { skill: "Communication", percent: 100 },
  { skill: "Teamwork", percent: 90 },
  { skill: "Adaptability", percent: 80 },
  { skill: "Attention to Detail", percent: 100 },
  { skill: "Time Management", percent: 100 },
  { skill: "Creativity", percent: 60 },
  { skill: "Self-Motivation", percent: 80 },
  { skill: "Critical Thinking", percent: 90 },
];

// PROFESSIONAL SKILLS DATA
export const professionalSkills = [
  {
    category: "Languages",
    items: [
      { name: "HTML", img: media.html },
      { name: "CSS", img: media.css },
      { name: "JavaScript", img: media.js },
      { name: "TypeScript", img: media.ts },
      { name: "Python", img: media.python },
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
    items: [
      { name: "Node.js", img: media.nodejs },
      { name: "Express.js", img: media.express },
      { name: "MongoDB", img: media.mongo },
      { name: "PostgreSQL", img: media.postgre },
    ],
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

import { media } from "../../public/media";

const projects = [
  {
    title: "My Portfolio",
    description:
      "This is my personal portfolio website. Created with React Vite and TailwindCSS. It showcases my projects, skills and contact information.",
    img: media.portfolio,
    alt: "Project 1",
    liveLink: "https://alexlozada-portfolio.netlify.app/",
    githubLink: "https://github.com/AlexLozada32/web-portfolio",
  },
  {
    title: "My Weather App",
    description:
      "A weather app created using Next.js, TailwindCSS and the OpenWeatherMap API. It displays the current weather of any searched city.",
    img: media.weatherApp,
    alt: "Project 2",
    liveLink: "https://amlr-weather-app.vercel.app/",
    githubLink: "https://github.com/AlexLozada32/weather-app",
  },
  {
    title: "More coming soon!",
    description: "Next project is being worked on. Check back soon! 🚧",
    img: media.comingSoon,
    alt: "Project 3",
    liveLink: "",
    githubLink: "",
  },
];

export default projects;

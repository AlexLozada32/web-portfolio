import { useState, useEffect } from "react";
import { media } from "../../constants/media";

const About = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const currentYear = new Date().getFullYear();
      const birthDate = 1998;
      const myAge = currentYear - birthDate;

      setAge(myAge);
    };

    calculateAge();
  }, []);

  return (
    <section className="mx-4 my-4 rounded-xl bg-twilightIndigo p-4 md:mx-0 md:mr-8 lg:mx-0 lg:mr-12">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        ABOUT ME
      </h1>

      <p className="mb-3 text-justify indent-4">
        Hey there! 👋🏻 I'm Alejandro, a {age} year old self-taught developer
        passionate about turning ideas into reality through code. Motivated by a
        deep fascination with technology and a commitment to continuous
        improvement, I'm on a journey to explore the vast landscape of coding.
        As I navigate this terrain, I'm eager to tackle new challenges and
        broaden my skill set across different domains. I thrive on delivering
        polished, user-friendly experiences and hold myself to high standards.
      </p>

      <p className="mb-3 text-justify indent-2">
        Though I'm currently honing my skills in frontend development, my sights
        are set on mastering backend technologies as well. I believe in the
        power of continual learning and see myself expanding my expertise to
        encompass the full stack as a natural progression in my coding journey.
        Outside of coding, you'll find me cheering for baseball, diving into
        video games, and reliving childhood memories with Pokémon. Let's connect
        and create something great together! 💻✨
      </p>

      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="mb-6 flex flex-col sm:mb-0">
          <div className="mb-2 flex items-center">
            <img src={media.pin} alt="pin" className="mr-2 h-5 w-5" />
            <p className="italic">Carolina, Puerto Rico</p>
          </div>
          <div className="flex items-center">
            <img src={media.language} alt="pin" className="mr-2 h-5 w-5" />
            <p>
              <span className="bg-regalBlue mr-2 rounded-full px-2 py-1 italic">
                Spanish
              </span>
              <span className="bg-regalBlue rounded-full px-2 py-1 italic">
                English
              </span>
            </p>
          </div>
        </div>
        <a
          href={media.cv}
          download
          className="bg-regalBlue hover:bg-twilightBlue flex w-full items-center justify-center rounded-xl px-4 py-2 text-white duration-500 hover:transition sm:w-40"
          aria-label="Download Resume"
        >
          <img src={media.download} alt="download" className="mr-2 h-4 w-4" />{" "}
          Resume
        </a>
      </div>
    </section>
  );
};

export default About;

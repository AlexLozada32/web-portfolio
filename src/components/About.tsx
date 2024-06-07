import { useState, useEffect } from "react";

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
    <section className="mx-4 mt-4 rounded-xl bg-twilightIndigo p-4 md:mr-8 md:mx-0 lg:mr-12 lg:mx-0">
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
      <p className="text-justify indent-2">
        Though I'm currently honing my skills in frontend development, my sights
        are set on mastering backend technologies as well. I believe in the
        power of continual learning and see myself expanding my expertise to
        encompass the full stack as a natural progression in my coding journey.
        Outside of coding, you'll find me cheering for baseball, diving into
        video games, and reliving childhood memories with Pokémon. Let's connect
        and create something great together! 💻✨
      </p>
    </section>
  );
};

export default About;

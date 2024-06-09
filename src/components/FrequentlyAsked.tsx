import Accordion from "./subcomponents/Accordion";

const FrequentlyAsked = () => {
  return (
    <section className="mx-4 mb-4 h-fit rounded-xl bg-twilightIndigo p-4 md:mx-8 lg:mx-12">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        FAQ
      </h1>
      <p className="mb-4 indent-4">
        In this section, you'll find answers to some frequently asked questions
        about my journey as a developer, my work philosophy, and my future
        aspirations. Whether you're a potential employer or client, these FAQs
        will provide deeper insights into who I am, my approach to development,
        and what drives my passion for technology. If you have any other
        questions, feel free to reach out—I'm always happy to connect and
        discuss more!
      </p>
      <Accordion />
    </section>
  );
};

export default FrequentlyAsked;

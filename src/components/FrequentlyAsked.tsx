import Accordion from "./subcomponents/Accordion";
import faqData from "../../constants/faqData";

const FrequentlyAsked = () => {
  return (
    <section
      id="faq"
      className="card-template"
    >
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        FAQ
      </h1>

      {/* <p className="mb-4 text-justify indent-4">
        In this section, you'll find answers to some frequently asked questions
        about my journey as a developer, my work philosophy, and my future
        aspirations. Whether you're a potential employer or client, these FAQs
        will provide deeper insights into who I am, my approach to development,
        and what drives my passion for technology. If you have any other
        questions, feel free to reach out—I'm always happy to connect and
        discuss more!
      </p> */}

      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`rounded-lg bg-regalBlue p-4 ${index !== faqData.length - 1 ? "mb-4" : ""}`}
        >
          <Accordion question={faq.question} p1={faq.p1} p2={faq.p2} />
        </div>
      ))}
    </section>
  );
};

export default FrequentlyAsked;

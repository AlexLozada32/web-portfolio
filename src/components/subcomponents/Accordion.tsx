import { useState } from "react";
import faqData from "../../../constants/faqData";

const Accordion = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };

  return (
    <div>
      {faqData.map((faq, index) => (
        <section key={index} className="mb-4">
          <button
            onClick={toggleAccordion}
            className="flex w-full justify-between"
          >
            <h2 className="font-bold">{faq.question}</h2>

            <span>{accordionIsOpen ? "-" : "+"}</span>
          </button>

          <div className={`${accordionIsOpen ? "block" : "hidden"}`}>
            <p>{faq.answer}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Accordion;
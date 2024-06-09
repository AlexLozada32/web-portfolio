import { useState } from "react";
import faqData from "../../../constants/faqData";

const Accordion = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };``

  return (
    <div className="rounded-lg bg-regalBlue p-4">
      {faqData.map((faq, index) => (
        <section key={index} className={`${index !== faqData.length - 1 ? "mb-4" : ""}`}>

          <button onClick={toggleAccordion} className="flex w-full justify-between">
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

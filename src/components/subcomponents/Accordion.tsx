import { useState } from "react";

type AccordionProps = {
  title: string;
  answer: string;
};

const Accordion = ({ title, answer }: AccordionProps) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };
  ``;

  return (
    <>
      <button
        onClick={toggleAccordion}
        className="flex w-full items-center justify-between"
      >
        <h2 className="font-bold">{title}</h2>
        <span className="text-xl">{accordionIsOpen ? "-" : "+"}</span>
      </button>

      <div className={`${accordionIsOpen ? "block" : "hidden"}`}>
        <p>{answer}</p>
      </div>
    </>
  );
};

export default Accordion;

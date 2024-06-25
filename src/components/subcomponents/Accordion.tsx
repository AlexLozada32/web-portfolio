import { useState } from "react";
import { media } from "../../../public/media";

type AccordionProps = {
  question: string;
  answer: string;
};

const Accordion = ({ question, answer }: AccordionProps) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
        className={`flex w-full items-center justify-between ${accordionIsOpen ? "mb-2" : ""}`}
      >
        <h2
          className={`mr-4 font-bold transition duration-500 ${accordionIsOpen ? "text-orangeTone" : ""}`}
        >
          {question}
        </h2>

        <img
          src={media.angleDown}
          alt={accordionIsOpen ? "down" : "up"}
          className={`h-4 w-4 transform duration-500 ${accordionIsOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div className={`${accordionIsOpen ? "block" : "hidden"}`}>
        <p className="text-justify indent-4">{answer}</p>
      </div>
    </>
  );
};

export default Accordion;

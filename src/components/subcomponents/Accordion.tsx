import { useState } from "react";
import { media } from "../../../public/media";

type AccordionProps = {
  question: string;
  p1: string;
  p2?: string;
};

const Accordion = ({ question, p1, p2 }: AccordionProps) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
        className={`flex w-full items-center justify-between ${accordionIsOpen ? "mb-2" : ""}`}
      >
        <h2
          className={`mr-4 font-bold transition duration-500 ${accordionIsOpen ? "text-coralSunset" : ""}`}
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
        <p className={`text-justify indent-4 ${p2 ? "mb-2" : ""}`}>{p1}</p>
        {p2 && <p className="text-justify indent-4">{p2}</p>}
      </div>
    </>
  );
};

export default Accordion;

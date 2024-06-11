import { useState } from "react";

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
        className="flex w-full items-center justify-between"
      >
        <h2
          className={`font-bold mr-4 transition duration-500 ${accordionIsOpen ? "text-coralSunset" : ""}`}
        >
          {question}
        </h2>
        <span className="text-xl">{accordionIsOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`transition duration-500 ${accordionIsOpen ? "" : "hidden"}`}
      >
        <p className={`text-justify indent-4 ${p2 ? "mb-2" : ""}`}>{p1}</p>
        {p2 && <p className="text-justify indent-4">{p2}</p>}
      </div>
    </>
  );
};

export default Accordion;

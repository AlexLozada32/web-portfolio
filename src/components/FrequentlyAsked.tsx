import Accordion from "./subcomponents/Accordion";
import faqData from "../../constants/faqData";

const FrequentlyAsked = () => {
  return (
    <section id="faq" className="card-template">
      <h1 className="mb-4 text-lg font-bold tracking-wider sm:text-xl md:text-2xl">
        FAQ
      </h1>

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

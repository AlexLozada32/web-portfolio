import ContactForm from "./subcomponents/ContactForm";
import { media } from "../../public/media";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <section className="card-template">
      <h1 className="mb-2 text-lg font-bold tracking-wider sm:mb-4 sm:text-xl md:text-2xl">
        CONTACT
      </h1>

      <p className="mb-2">
        Have a question, interested in working together, or want to discuss a
        project? Feel free to reach out! I'm always open to new opportunities
        and connections.
      </p>

      <div className="mb-2 flex items-center">
        <img src={media.phone} alt="phone" className="mr-4 h-5 w-5" />
        <a href="tel:+17877183354">+1 (787) 718-3354</a>
      </div>

      <div className="mb-2 flex items-center">
        <img src={media.mail} alt="mail" className="mr-4 h-5 w-5" />
        <a
          href="mailto:alex.lozadareyes@icloud.com"
          target="_blank"
          rel="noreferrer"
        >
          alex.lozadareyes@icloud.com
        </a>
      </div>

      <div className="mb-4 flex items-center">
        <img src={media.linkedin} alt="linkedin" className="mr-4 h-5 w-5" />
        <a
          href="https://www.linkedin.com/in/alejandro-lozada-960b05284/"
          target="_blank"
          rel="noreferrer"
        >
          Alejandro Lozada Reyes
        </a>
      </div>

      <ContactForm />

      <p>&copy; {year} Alejandro Lozada Reyes. All rights reserved.</p>
    </section>
  );
};

export default Contact;

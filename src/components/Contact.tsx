import { ContactInfo, ContactForm } from "../constants/compExport";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="card-template">
      <h1 className="mb-2 text-lg font-bold tracking-wider sm:mb-4 sm:text-xl md:text-2xl">
        CONTACT
      </h1>

      <p className="mb-4">
        Have a question, interested in working together, or want to discuss a
        project? Feel free to reach out! I'm always open to new opportunities
        and connections.
      </p>

      <div className="mb-4 items-center justify-around md:flex">
        <ContactInfo />
        <ContactForm />
      </div>

      <p>&copy; {year} Alejandro Lozada Reyes. All rights reserved.</p>
    </section>
  );
};

export default Contact;

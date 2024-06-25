import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_s98tpa9", "template_y7s35le", form.current, publicKey)
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );

    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-cardColor flex flex-col rounded-xl p-4 md:w-2/5"
    >
      <input
        type="text"
        name="from_name"
        className="bg-formInputBg text-formInputText mb-4 rounded-lg p-2 tracking-wider"
        placeholder="Your Name"
        autoComplete="off"
        required
      />
      <input
        type="email"
        name="user_email"
        className="bg-formInputBg text-formInputText mb-4 rounded-lg p-2 tracking-wider"
        placeholder="Your Email"
        autoComplete="off"
        required
      />
      <textarea
        name="message"
        className="bg-formInputBg text-formInputText mb-4 resize-none rounded-lg p-2 tracking-wider"
        placeholder="Message"
        rows={5}
        required
      />
      <input type="submit" value="Submit" className="font-bold" />
    </form>
  );
}

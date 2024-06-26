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
      className="flex flex-col rounded-xl bg-cardColor p-4 md:w-2/5"
    >
      <input
        type="text"
        name="from_name"
        className="mb-4 rounded-lg bg-formInputBg p-2 tracking-wider text-formInputText"
        placeholder="Your Name"
        autoComplete="off"
        required
      />
      <input
        type="email"
        name="user_email"
        className="mb-4 rounded-lg bg-formInputBg p-2 tracking-wider text-formInputText"
        placeholder="Your Email"
        autoComplete="off"
        required
      />
      <textarea
        name="message"
        className="mb-4 resize-none rounded-lg bg-formInputBg p-2 tracking-wider text-formInputText"
        placeholder="Message"
        rows={5}
        required
      />
      <div className="flex justify-center">
        <input
          type="submit"
          value="Submit"
          className="cursor-pointer rounded-lg bg-buttonColor px-4 py-2 font-bold"
        />
      </div>
    </form>
  );
}

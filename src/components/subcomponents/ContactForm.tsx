import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_s98tpa9", "template_y7s35le", form.current, {
        publicKey: "2LDyPNb94qsWVJg8v",
      })
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
      className="mb-4 flex flex-col rounded-xl bg-sapphireSky p-4"
    >
      <input
        type="text"
        name="from_name"
        className="bg-etherealMist text-slateGray mb-4 rounded-lg p-2 tracking-wider"
        placeholder="Name"
        autoComplete="off"
        required
      />
      <input
        type="email"
        name="user_email"
        className="bg-etherealMist text-slateGray mb-4 rounded-lg p-2 tracking-wider"
        placeholder="Email"
        autoComplete="off"
        required
      />
      <textarea
        name="message"
        className="bg-etherealMist text-slateGray mb-4 resize-none rounded-lg p-2 tracking-wider"
        placeholder="Message"
        rows={5}
        required
      />
      <input type="submit" value="Submit" className="font-bold" />
    </form>
  );
}

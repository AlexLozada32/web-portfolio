import { media } from "../../../public/media";

const ContactInfo = () => {
  return (
    <div className="mb-4 md:mb-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-y-6 lg:gap-8">
      <div className="mb-4 flex flex-col items-center md:mb-0">
        <div className="bg-cardColor mb-2 flex h-10 w-10 items-center justify-center rounded-full">
          <img src={media.mail} alt="mail" className="h-5 w-5" />
        </div>
        <p className="text-lg font-bold tracking-wide">Email</p>
        <a
          href="mailto:alex.lozadareyes@icloud.com"
          target="_blank"
          rel="noreferrer"
          className="transform text-socialColor duration-300 hover:scale-110"
        >
          alex.lozadareyes@icloud.com
        </a>
      </div>

      <div className="mb-4 flex flex-col items-center md:mb-0">
        <div className="bg-cardColor mb-2 flex h-10 w-10 items-center justify-center rounded-full">
          <img src={media.phone} alt="phone" className="h-5 w-5" />
        </div>
        <p className="text-lg font-bold">Phone</p>
        <a
          href="tel:+17877183354"
          className="transform text-socialColor duration-300 hover:scale-110"
        >
          +1 (787) 718-3354
        </a>
      </div>

      <div className="mb-4 flex flex-col items-center md:mb-0">
        <div className="bg-cardColor mb-2 flex h-10 w-10 items-center justify-center rounded-full">
          <img src={media.linkedin} alt="linkedin" className="h-5 w-5" />
        </div>
        <p className="text-lg font-bold tracking-wide">LinkedIn</p>
        <a
          href="https://www.linkedin.com/in/alejandro-lozada-960b05284/"
          target="_blank"
          rel="noreferrer"
          className="transform text-socialColor duration-300 hover:scale-110"
        >
          Alejandro Lozada Reyes
        </a>
      </div>

      <div className="mb-4 flex flex-col items-center md:mb-0">
        <div className="bg-cardColor mb-2 flex h-10 w-10 items-center justify-center rounded-full">
          <img src={media.githubWhite} alt="linkedin" className="h-5 w-5" />
        </div>
        <p className="text-lg font-bold tracking-wide">GitHub</p>
        <a
          href="https://github.com/AlexLozada32"
          target="_blank"
          rel="noreferrer"
          className="transform text-socialColor duration-300 hover:scale-110"
        >
          AlexLozada32
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;

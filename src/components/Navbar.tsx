import { useState } from "react";
import { media } from "../../public/media";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav id="navbar" className="mx-4 h-16 md:mx-8 lg:mx-12">
        {/* HAMBURGER MENU FOR MOBILE */}
        <div className="flex h-full items-center justify-end sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img
              src={media.hamburger}
              alt="hamburger"
              className="h-10 w-10 sm:hidden"
            />
          </button>
        </div>

        {/* NAVIGATION LINKS FOR DESKTOP */}
        <ul className="hidden h-full font-bold tracking-wider sm:flex sm:items-center sm:justify-end">
          <li className="transition duration-300 hover:-translate-y-1 hover:transform sm:mr-4 md:mr-6">
            <a href="#about">About</a>
          </li>
          <li className="transition duration-300 hover:-translate-y-1 hover:transform sm:mr-4 md:mr-6">
            <a href="#skills">Skills</a>
          </li>
          <li className="transition duration-300 hover:-translate-y-1 hover:transform sm:mr-4 md:mr-6">
            <a href="#projects">Projects</a>
          </li>
          <li className="transition duration-300 hover:-translate-y-1 hover:transform sm:mr-4 md:mr-6">
            <a href="#faq">FAQ</a>
          </li>
          <li className="transition duration-300 hover:-translate-y-1 hover:transform">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* MENU OPEN */}
      {isMenuOpen && (
        <ul
          className={`card-template bg-mainCard p-4 sm:hidden ${isMenuOpen ? "hamburger-left" : ""}`}
        >
          <a
            href="#about"
            className="mb-2 flex justify-center border-b-1 border-background text-lg font-bold"
          >
            <li className="mb-2">About</li>
          </a>
          <a
            href="#skills"
            className="mb-2 flex justify-center border-b-1 border-background text-lg font-bold"
          >
            <li className="mb-2">Skills</li>
          </a>
          <a
            href="#projects"
            className="mb-2 flex justify-center border-b-1 border-background text-lg font-bold"
          >
            <li className="mb-2">Projects</li>
          </a>
          <a
            href="#faq"
            className="mb-2 flex justify-center border-b-1 border-background text-lg font-bold"
          >
            <li className="mb-2">FAQ</li>
          </a>
          <a href="#contact" className="flex justify-center text-lg font-bold">
            <li>Contact</li>
          </a>
        </ul>
      )}
    </>
  );
};

export default Navbar;

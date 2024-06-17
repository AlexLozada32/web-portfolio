import { useState, useEffect } from "react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (window.scrollY > navbarHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`text-lxl fixed bottom-4 right-3 hidden h-6 w-6 rounded-full bg-sapphireSky hover:bg-twilightIndigo lg:block ${isVisible ? "slide-in" : "slide-out"}`}
    >
      <a href="#navbar">↑</a>
    </button>
  );
};

export default ScrollUpButton;

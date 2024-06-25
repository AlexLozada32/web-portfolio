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
    <a
      href="#navbar"
      className={`text-lxl fixed bottom-4 right-3 hidden h-6 w-6 items-center rounded-full bg-cardColor hover:bg-mainCard lg:flex lg:justify-center ${isVisible ? "slide-in" : "slide-out"}`}
    >
      ↑
    </a>
  );
};

export default ScrollUpButton;

const Navbar = () => {
  return (
    <nav id="navbar" className="mx-4 h-16 md:mx-8 lg:mx-12">
      <ul className="flex h-full items-center justify-between font-bold tracking-wider sm:justify-end">
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
  );
};

export default Navbar;

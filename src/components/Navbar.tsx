const Navbar = () => {
  return (
    <nav className="mx-4 h-14 md:mx-8 lg:mx-12">
      <ul className="flex h-full items-center justify-between font-bold tracking-wider sm:justify-end">
        <li className="animate-hoverDown hover:animate-hoverUp sm:mr-4 md:mr-6">
          <a href="">About</a>
        </li>
        <li className="animate-hoverDown hover:animate-hoverUp sm:mr-4 md:mr-6">
          <a href="">Skills</a>
        </li>
        <li className="animate-hoverDown hover:animate-hoverUp sm:mr-4 md:mr-6">
          <a href="">Project</a>
        </li>
        <li className="animate-hoverDown hover:animate-hoverUp sm:mr-4 md:mr-6">
          <a href="">FAQ</a>
        </li>
        <li className="animate-hoverDown hover:animate-hoverUp">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { media } from "../../public/media";

const Header = () => {
  return (
    <header className="card-template py-8 md:mx-8 lg:mx-12">
      <div className="flex items-center justify-center">
        <img
          src={media.logo}
          alt="profile"
          className="mr-4 hidden h-20 w-20 rounded-full sm:block"
        />
        <div className="relative">
          <h1 className="xs:text-lg font-bold tracking-wider sm:text-xl md:text-3xl">
            ALEJANDRO LOZADA REYES
          </h1>
          <h2 className="xs:text-lg absolute -bottom-5 right-0 font-bold italic text-orangeTone sm:text-xl md:-bottom-6 md:text-2xl">
            Fullstack Developer
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;

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
          <h1 className="text-lg font-bold tracking-wider sm:text-xl md:text-3xl">
            ALEJANDRO LOZADA REYES
          </h1>
          <h2 className="text-orangeTone absolute -bottom-5 right-0 text-lg font-bold italic sm:text-xl md:-bottom-6 md:text-2xl">
            Frontend Developer
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;

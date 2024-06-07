import { media } from "../../constants/media";

const Header = () => {
  return (
    <header className="mx-4 rounded-xl bg-twilightIndigo py-8 md:mx-8 lg:mx-12">
      <div className="flex items-center justify-center">
        <img
          src={media.logo}
          alt="profile"
          className="mr-4 h-20 w-20 rounded-full hidden sm:block"
        />
        <div className="relative">
          <h1 className="text-lg font-bold tracking-wider sm:text-xl md:text-3xl">
            ALEJANDRO LOZADA REYES
          </h1>
          <h2 className="absolute -bottom-5 right-0 -skew-x-12 text-lg font-bold text-coralSunset sm:text-xl md:-bottom-6 md:text-2xl">
            Frontend Developer
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;

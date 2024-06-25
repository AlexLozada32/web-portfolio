import {
  Navbar,
  Header,
  ProfilePicture,
  About,
  PersonalSkills,
  ProfessionalSkills,
  Projects,
  FrequentlyAsked,
  Contact,
  ScrollUpButton,
} from "./constants/compExport";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <div className="lg:grid lg:grid-cols-auto-1fr lg:gap-4">
        <ProfilePicture />
        <About />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <PersonalSkills />
        <ProfessionalSkills />
      </div>
      <Projects />
      <FrequentlyAsked />
      <Contact />
      <ScrollUpButton />
    </main>
  );
};

export default App;

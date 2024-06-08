import {
  Navbar,
  Header,
  ProfileCard,
  About,
  PersonalSkills,
  ProfessionalSkills,
} from "../constants/compExport";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <div className="md:grid md:grid-cols-auto-1fr md:gap-4">
        <ProfileCard />
        <About />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <PersonalSkills />
        <ProfessionalSkills />
      </div>
    </main>
  );
};

export default App;

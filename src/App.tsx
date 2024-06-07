import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <div className="md:grid-cols-auto-1fr md:grid md:gap-4">
        <ProfileCard />
        <About />
      </div>
    </main>
  );
};

export default App;

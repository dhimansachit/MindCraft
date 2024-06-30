import Header from "./components/Header";
import ButtonGradient from "./components/svg/ButtonGradient";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;

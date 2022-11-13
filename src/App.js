import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Technology from "./components/Technology";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Technology />
      <Portfolio />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

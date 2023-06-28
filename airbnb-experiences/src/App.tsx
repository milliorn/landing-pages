import PhotoGrid from "./assets/photo-grid.webp";

import { CardLayout } from "./components/CardLayout";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

/**
 * main app
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Hero
        alt="PhotoGrid"
        h1="Online Experiences"
        p="Join unique interactive activities led by one of a kind hosts-all without leaving home."
        src={PhotoGrid}
      />
      <CardLayout />
    </div>
  );
}

export default App;

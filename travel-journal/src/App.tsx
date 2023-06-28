import CardGenerator from "./components/CardGenerator";
import CardLayout from "./components/CardLayout";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

/* main app */
function App(): JSX.Element {
  return (
    <div className="bg-black antialiased overflow-x-hidden">
      <Hero />
      <CardLayout cardLayout={CardGenerator()} />
      <Footer />
    </div>
  );
}

export default App;

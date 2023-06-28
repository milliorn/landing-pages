import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";

// main app for landing page
export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <Carousel />
      <Footer />
    </>
  );
}

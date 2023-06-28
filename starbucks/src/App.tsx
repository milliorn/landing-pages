import { BoxA } from "./components/BoxA";
import { BoxB } from "./components/BoxB";
import { BoxC } from "./components/BoxC";
import { BoxD } from "./components/BoxD";
import { BoxE } from "./components/BoxE";
import { BoxF } from "./components/BoxF";

import { Navbar } from "./components/Navbar";
import { Divider } from "./components/Divider";
import { Footer } from "./components/Footer";

/* main app */
function App(): JSX.Element {
  return (
    <div className="container box-border w-full p-0 mx-auto font-sans antialiased leading-snug">
      <Navbar />
      <BoxA />
      <BoxB />
      <BoxC />
      <BoxD />
      <BoxE />
      <BoxF />
      <Divider />
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from "./components";
import { useWindowSize } from "./utils/useWindowSize";

const App = () => {
  const { width } = useWindowSize();
  const isMobile = width < 640;
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          {!isMobile && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

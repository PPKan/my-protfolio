import { useRef } from "react";
import "../css/app.scss";
import Contact from "./Contact";
import Foot from "./Foot";
import Navbar from "./Navbar";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";

function App() {
  const navbarRef = useRef();
  const personalInfoRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Navbar
        navbarRef={navbarRef}
        personalInfoRef={personalInfoRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <PersonalInfo personalInfoRef={personalInfoRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Foot navbarRef={navbarRef} />
    </>
  );
}

export default App;

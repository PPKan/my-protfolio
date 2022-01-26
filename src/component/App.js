import { useRef } from "react";
import "../css/app.scss";
import Contact from "./Contact";
import Navbar from "./Navbar";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";

function App() {
  const personalInfoRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Navbar
        personalInfoRef={personalInfoRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <PersonalInfo personalInfoRef={personalInfoRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}

export default App;

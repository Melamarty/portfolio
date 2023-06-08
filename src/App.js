import { Route, Routes  } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Testcomp from "./components/test/test";
import { useState } from "react";
import './styles/vars.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/test"
          Component={(props) => (
            <Testcomp
              {...props}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )}
        />
        <Route path="/" Component={(props) => (
            <Home
              {...props}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )} 
        />
        <Route path="/about" Component={(props) => (
            <About
              {...props}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )} 
        />
        <Route path="/skills" Component={(props) => (
            <Skills
              {...props}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )} 
        />
        <Route path="/contact" Component={(props) => (
            <Contact
              {...props}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )} />
        <Route path="/projects" Component={(props) => (
            <Projects
              {...props}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )} />
       
        
      </Routes>
    </div>
  );
}

export default App;

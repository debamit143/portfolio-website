import './App.css'
import { Navbar } from "./Components/Navbar/Navbar";
import { Intro } from "./Components/Intro/Intro";
import { Services } from "./Components/Services/Services";
import { Experience } from './Components/Experience/Experience';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
// import { Education } from './Components/Education/Education';
// import { ProjectDetails } from './Components/ProjectDetails/ProjectDetails';
import {themeContext} from './Context'
import { useContext } from 'react';


function App() {
  const theme = useContext(themeContext)
  const darkMood = theme.state.darkMood
  return (
    <div className="App"
      style={{
        background: darkMood ? 'black':'',
        color: darkMood ? 'white':''
      }}
    
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      {/* <ProjectDetails/> */}
      {/* <Education/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

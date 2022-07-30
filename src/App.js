import './App.css'
import { Navbar } from "./Components/Navbar/Navbar";
import { Intro } from "./Components/Intro/Intro";
import { Services } from "./Components/Services/Services";
import { Experience } from './Components/Experience/Experience';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
// import { ProjectDetails } from './Components/ProjectDetails/ProjectDetails';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      {/* <ProjectDetails/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Rewards from "./components/Rewards";
import Contact from "./components/Contact";

function App() {
   return (
      <div className='App'>
         <Navbar />
         <LandingPage />
         <About />
         <Rewards />
         <Contact />
      </div>
   );
}

export default App;

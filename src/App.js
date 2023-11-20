import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Portfolio/Navbar';
import Home from './Portfolio/Home';
import About from './Portfolio/About';
import Services from './Portfolio/Services';
import Project from './Portfolio/Project';
import Contact from './Portfolio/Contact';
import BtnToTop from './Portfolio/BtnToTop';
function App() {
  return (
    <div className=''>
         <Navbar/>
         <Home/>
         <About/>
        <Services/> 
        <Project/>
        <Contact/>
        <BtnToTop/>
    </div>
  );
}

export default App;

import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Copyright from './components/Copyright';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <NavBar />
      <div style={{display:'flex', flexDirection:'column'}}>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Copyright />
      </div>
    </div>
  );
}

export default App;

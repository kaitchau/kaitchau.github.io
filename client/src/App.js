import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Copyright from './components/Copyright';

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <NavBar />
      <div style={{display:'flex', flexDirection:'column'}}>
        <Home />
        <About />
        <Copyright />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <NavBar />
      <div style={{display:'flex'}}>
        <Home />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import Button from "./components/Button";
import LocalizationsPanel from "./components/LocalizationsPanel";
import UserPanel from "./components/UserPanel";

function App() {
  return (
    <div className="App">
      <div className="Left-column">
        <UserPanel/>
      </div>
      <div className="Middle-column">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>Button</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <LocalizationsPanel/>
    </div>
  );
}

export default App;

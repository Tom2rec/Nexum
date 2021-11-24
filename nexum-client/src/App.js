import logo from './logo.svg';
import './App.css';

import LocalizationsPanel from "./components/LocalizationsPanel";
import UserPanel from "./components/UserPanel";
import Recommendations from "./components/Recommendations";

function App() {
  return (
    <div className="App">
      <div className="Left-column">
        <UserPanel/>
      </div>
      <div className="Middle-column">
        <Recommendations>
        </Recommendations>
      </div>
      <LocalizationsPanel/>
    </div>
  );
}

export default App;

import './App.css';
import LoginGithub from './Login/LoginGithub';
import Repos from './Repos/Repos';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
function App() {
  let client_secret = "c13563e0ba5560b4ae0b70259ffff35180171d70";
  let client_id = "ac0923b97d31570393ce";
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route path='/login' Component={LoginGithub} />
          <Route path='/repos' Component={Repos}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Admin from './Compontents/Admin';
import Home from "./Compontents/home";
import {
  Routes, Route, BrowserRouter
} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <h1>Live Cricket Scoreboard</h1>
    <Routes>
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/" element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;

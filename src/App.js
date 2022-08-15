import './index.css'

import {
    Route,
    Routes,
} from "react-router-dom";

import Dashboard from "./components/Dashboard/Dash";
import Home from "./Home";
import Reflex from "./components/Games/Reaction/Reflex";

export default function App() {
    return (
          <Routes>
            <Route  exact path='/' element={<Home/>} />
            <Route  exact path='/dashboard' element={<Dashboard/>} />
            <Route  exact path='/games/reaction' element={<Reflex/>} />
          </Routes>
    );
  }
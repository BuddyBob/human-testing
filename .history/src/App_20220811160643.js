import './index.css'

import {
    Route,
    Routes,
} from "react-router-dom";

import Dashboard from "./components/Dashboard/Dash";
import Home from "./Home";

export default function App() {
    return (
          <Routes>
            <Route  exact path='/' element={<Home/>} />
            <Route  exact path='/dashboard' element={<Dashboard/>} />
          </Routes>
    );
  }
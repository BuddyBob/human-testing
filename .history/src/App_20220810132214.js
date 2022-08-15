import {
    Route,
    Routes,
} from "react-router-dom";

import Home from "./Home";
import './index.css'

export default function App() {
    return (
          <Routes>
            <Route  exact path='/' element={<Home/>} />
          </Routes>
    );
  }
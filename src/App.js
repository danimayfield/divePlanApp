import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import DivePlan from "./components/DivePlan";
import DiveBook from "./components/DiveBook";
import Landing from "./components/Landing";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">
        <h1>My Dive Plan Logo</h1>
        </Link>
        <nav>
          <ul>
          <Link to="/divePlan">
              <li>Plan A Dive</li>
            </Link>
            <Link to="/diveBook">
              <li>Dive Book</li>
            </Link>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/divePlan" element={<DivePlan />} />
        <Route path="/diveBook" element={<DiveBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import DivePlan from "./components/DivePlan";
import SecondDivePlan from './components/SecondDivePlan';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to="/">
       <h1>My Dive Plan</h1>
      </Link>
    </div>
    <Routes>
      <Route path="/" element={<DivePlan/>}/>
      <Route path="/secondDive" element={<SecondDivePlan/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

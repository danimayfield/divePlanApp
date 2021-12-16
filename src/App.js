import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import DivePlan from "./components/DivePlan";
import DiveBook from "./components/DiveBook";
import Landing from "./components/Landing";
import SecondDivePlan from "./components/SecondDivePlan";

import logo from "./assets/divePlanLogo.png"

function App() {
  // state to hold user depth choice
  const [depthChoice, setDepthChoice] = useState(0);
  // state to hold user time choice
  const [timeChoice, setTimeChoice] = useState(0);
  // state to hold safety stop requirement
  const [safetyStop, setSafetyStop] = useState(false);
  // state to hold safety stop string to be displayed on page
  const [safetyStopString, setSafetyStopString] = useState("");
  // state to hold the user's name
  const [name, setName] = useState("");
  // state to hold whether the user has hit no-deco limit
  const [decoLimit, setDecoLimit] = useState(false);
  // state to hold the string if a user reaches their no-deco limit
  const [decoLimitString, setDecoLimitString] = useState("");
  // state to hold the surface interval choice
  const [surfaceInterval, setSurfaceInterval] = useState(0);

  useEffect(() => {
    //   function to check if a safety stop is required:
    const safetyStopRequired = () => {
      // If statement comparing the depth choice to the max time allowed underwater before you need to have a safety stop
      if (depthChoice === 10 && timeChoice >= 160) {
        setSafetyStop(true);
      } else if (depthChoice === 14 && timeChoice >= 82) {
        setSafetyStop(true);
      } else if (depthChoice === 18 && timeChoice >= 51) {
        setSafetyStop(true);
      } else if (depthChoice === 22 && timeChoice >= 32) {
        setSafetyStop(true);
      } else if (depthChoice === 25 && timeChoice >= 25) {
        setSafetyStop(true);
      } else if (depthChoice === 30 && timeChoice >= 1) {
        setSafetyStop(true);
      } else {
        setSafetyStop(false);
      }
    };

    safetyStopRequired();
  }, [depthChoice, timeChoice]);

  useEffect(() => {
    //   function to check if you would hit your no-deco limit based on choices:
    const decoLimitReached = () => {
      // If statement comparing the depth choice to the max time allowed underwater before hitting your no-decompression limit
      if (depthChoice === 14 && timeChoice >= 98) {
        setDecoLimit(true);
      } else if (depthChoice === 18 && timeChoice >= 56) {
        setDecoLimit(true);
      } else if (depthChoice === 22 && timeChoice >= 37) {
        setDecoLimit(true);
      } else if (depthChoice === 25 && timeChoice >= 29) {
        setDecoLimit(true);
      } else if (depthChoice === 30 && timeChoice >= 20) {
        setDecoLimit(true);
      } else {
        setDecoLimit(false);
      }
    };

    decoLimitReached();
  }, [depthChoice, timeChoice]);

  useEffect(() => {
    //   function to display a specific string on the screen if the safety stop is true which means it's required or false which means it's not required
    const safetyStopStringF = () => {
      if (safetyStop === true) {
        setSafetyStopString(
          "You need to make a safety stop for 3 minutes (minimum) at 5 metres on this dive"
        );
      } else {
        setSafetyStopString("A safety stop is NOT required for this dive");
      }
    };
    // Call function
    safetyStopStringF();
  }, [safetyStop]);

  useEffect(() => {
    //   function to display a specific string on the screen if the decoLimit state is true which means the no-deco limit has been reached or if it's false which means nothing extra is required.
    const decoLimitStringF = () => {
      if (decoLimit === true) {
        setDecoLimitString(
          "For this dive: You've surpassed the no-decompression limit for this dive depth, either reduce your time underwater, reduce your depth or prepare to make time for extra decompression stops depending on how long you exceed your limit. Proceed with caution if you decide to move forward with this dive."
        );
      } else {
        setDecoLimitString("");
      }
    };
    // Call function
    decoLimitStringF();
  }, [decoLimit]);

  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <img src={logo} alt="My Dive Plan Logo" />
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
      </header>
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route
          path="divePlan"
          element={<DivePlan
            depthChoice={depthChoice}
            timeChoice={timeChoice}
            setDepthChoice={setDepthChoice}
            setTimeChoice={setTimeChoice}
            safetyStopString={safetyStopString}
            name={name} 
            setName={setName}
            decoLimit={decoLimit}
            decoLimitString={decoLimitString} />} />
        <Route path="diveBook" element={<DiveBook />} />
        <Route 
        path="/secondDive" 
        element={<SecondDivePlan 
          setSurfaceInterval={setSurfaceInterval}
          surfaceInterval={surfaceInterval}
          name={name}
          setName={setName}
          timeChoice={timeChoice}
          depthChoice={depthChoice}
          safetyStopString={safetyStopString}
          decoLimitString={decoLimitString} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

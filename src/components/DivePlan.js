import { useState, useEffect } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";

function DivePlan() {
  // state to hold user depth choice
  const [depthChoice, setDepthChoice] = useState(0);
  // state to hold user time choice
  const [timeChoice, setTimeChoice] = useState(0);
  // state to hold safety stop requirement
  const [safetyStop, setSafetyStop] = useState(false);
  // state to hold safety stop string to be displayed on page
  const [safetyStopString, setSafetyStopString] = useState("");
  // state to hold whether the user chooses to save their data or not
  const [saveDiveButton, setSaveDiveButton] = useState(false);
  // state to hold whether the user chooses to plan a second dive or not
  const [planDive2, setPlanDive2] = useState(false);
  // state to hold the user's name
  const [name, setName] = useState("");
  // state to hold whether the user has hit no-deco limit
  const [decoLimit, setDecoLimit] = useState(false);
  // state to hold the string if a user reaches their no-deco limit
  const [decoLimitString, setDecoLimitString] = useState("");

  // array of depth options
  const depthOptions = [10, 14, 18, 22, 25, 30];
  // array of time spent underwater options
  const timeUnderwater = [
    10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160,
  ];

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

  // function to handle what happens when a user clicks to save their dive
  const handleSaveDiveButton = () => {
    // set the state to true which renders the name input
    setSaveDiveButton(true);
  };

  // function to handle the name input
  const handleInputChange = (event) => {
    event.preventDefault();
    // set the name state to the value of what the user enters
    setName(event.target.value);
  };

  // function to handle what happens when the user submits the form/effectively saving their dive information
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call the addToDatabase function
    addToDatabase();
    // Reset the name state - resetting the name input
    setName("");
  };

  // function to add/push information to be saved in firebase
  const addToDatabase = () => {
    //   save the info under their reference "name"
    const dbRef = firebase.database().ref();
    dbRef.push({
      name: `${name}`,
      depth: `${depthChoice}`,
      time: `${timeChoice}`,
      decoLimit: `${decoLimitString}`,
      safetyStop: `${safetyStopString}`,
    });
  };

  // function to refresh page
  const refreshPage = () => {
    window.location.reload(false);
  };

   // function to handle what happens when a user clicks to plan a second dive
  const handleSecondDiveButton = () => {
    // set the state to true which will render more input options for the user
    setPlanDive2(true)
  };

  return (
    <div>
      <h2>Plan your first dive!</h2>
      <form onSubmit={handleFormSubmit}>
        <h3>Choose your depth:</h3>
        {/* map through the depthOptions array and return each option as a button */}
        {depthOptions.map((depth) => {
          return (
            <input
              key={depth}
              type="button"
              id={`${depth}m`}
              value={`${depth}m`}
              onClick={() => {
                setDepthChoice(depth);
              }}
            />
          );
        })}

        {/* Conditionally render the time choices only after a depth choice is chosen - if depth is not chosen, nothing will show */}
        {depthChoice > 0 ? (
          <div>
            <h3>Choose your time:</h3>
            {/* map through the timeUnderwater array and return each option as a button */}
            {timeUnderwater.map((time) => {
              return (
                <input
                  key={time}
                  type="button"
                  id={`${time}mins`}
                  value={`${time}mins`}
                  onClick={() => {
                    setTimeChoice(time);
                  }}
                />
              );
            })}
            {/* Conditionally render the safteyStopString only after the timeChoice is chosen */}
            {timeChoice > 0 ? (
              <div>
                <h3>For your dive:</h3>
                {decoLimit === true ? (
                  <div>
                    <p>{decoLimitString}</p>
                    <Link to="/">
                      <p className="button" onClick={refreshPage}>
                        Reset
                      </p>
                    </Link>
                  </div>
                ) : null}
                <p>{safetyStopString}</p>
                <button onClick={handleSaveDiveButton}>Save My Dive</button>
                <p>Or</p>
                <button onClick={handleSecondDiveButton}>
                  Plan A Second Dive
                </button>
                {
                  // ! POSSIBLY USE THE NAVIGATE HOOK TO PASS PROPS FROM THIS COMPONENT TO A SECOND DIVE PLAN COMPONENT AND SET THE NAVIGATE HOOK TO BE TRIGGERED WITHIN THE ONCLICK OF THE HANDLEsECONDdIVEbUTTON FUNCTION!!!!!!!!!
                }
                {/* Conditionally render the enter your name input if the user decides to save their first dive data.  */}
                {saveDiveButton ? (
                  <div>
                    <label htmlFor="name">
                      Enter Your Name To Save Your Dive Information:
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                    />
                    <input type="submit" value="Save" id="submit" />
                    <Link to="/diveBook">
                      <p>View Your Dives</p>
                    </Link>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default DivePlan;

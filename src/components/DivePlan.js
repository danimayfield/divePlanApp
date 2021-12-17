import { useState } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";

function DivePlan(props) {
  // State to hold whether the user selected to save their dive information or not
  const [saveDiveButton, setSaveDiveButton] = useState(false);

  // array of depth options
  const depthOptions = [10, 14, 18, 22, 25, 30];
  // array of time spent underwater options
  const timeUnderwater = [
    10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160,
  ];

  // function to handle what happens when a user clicks to save their dive
  const handleSaveDiveButton = () => {
    // set the state to true which renders the name input
    setSaveDiveButton(true);
  };

  // function to handle the name input
  const handleInputChange = (event) => {
    event.preventDefault();
    // set the name state to the value of what the user enters
    props.setName(event.target.value);
  };

  // function to handle what happens when the user submits the form/effectively saving their dive information
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call the addToDatabase function
    addToDatabase();
    // Reset the name state - resetting the name input
    props.setName("");

    alert("Your dive information is saved in the Dive Book!")
  };

  // function to add/push information to be saved in firebase
  const addToDatabase = () => {
    //   save the info under their reference "name"
    const dbRef = firebase.database().ref();
    dbRef.push({
      name: `${props.name}`,
      depth: `${props.depthChoice}`,
      time: `${props.timeChoice}`,
      decoLimit: `${props.decoLimitString}`,
      safetyStop: `${props.safetyStopString}`,
    });
  };

  // function to refresh page
  const refreshPage = () => {
    window.location.reload(false);
  };

  // function to handle what happens when a user clicks to plan a second dive
  const handleSecondDiveButton = () => {
    // Disable the save dive button
    const disableButton = document.getElementById("saveDiveButton");
    disableButton.disabled = true;
    // Remove the save dive name input as well if the user had already opened it.
    setSaveDiveButton(false);
  };

  return (
    <div className="divePlanWrapper">
      <h2>Plan your first dive!</h2>
      <form onSubmit={handleFormSubmit} className="divePlanContainer">
        <div className="depth">
          <h3>Choose Your Depth:</h3>
          {/* map through the depthOptions array and return each option as a button */}
          <div className="deptButtons">
            {depthOptions.map((depth) => {
              return (
                <input
                  key={depth}
                  type="button"
                  id={`${depth}m`}
                  value={`${depth}m`}
                  onClick={() => {
                    props.setDepthChoice(depth);
                  }}
                  className="option"
                />
              );
            })}
          </div>
        </div>
        {/* Conditionally render the time choices only after a depth choice is chosen - if depth is not chosen, nothing will show */}
        {props.depthChoice > 0 ? (
          <>
            <div className="time">
              <h3>Choose Your Time:</h3>
              {/* map through the timeUnderwater array and return each option as a button */}
              <div className="timeOptions">
                {timeUnderwater.map((time) => {
                  return (
                    <input
                      key={time}
                      type="button"
                      id={`${time}mins`}
                      value={`${time}mins`}
                      onClick={() => {
                        props.setTimeChoice(time);
                      }}
                      className="option"
                    />
                  );
                })}
              </div>
            </div>
            {/* Conditionally render the safteyStopString only after the timeChoice is chosen */}
            {props.timeChoice > 0 ? (
              <>
                <div className="decoSafeteyInfo">
                  <h3>For Your Dive:</h3>
                  {/* Conditionally render the deco limit string if the user chooses a dive plan that surpasses their no decompression limit */}
                  {props.decoLimit === true ? (
                    <div>
                      <p>{props.decoLimitString}</p>
                    </div>
                  ) : null}
                  <p>{props.safetyStopString}</p>
                </div>
                <div className="options">
                  <h3>Would You Like To...</h3>
                  <div className="optionButtons">
                    <Link to="/">
                      <p className="option2" onClick={refreshPage}>
                        Reset
                      </p>
                    </Link>
                    {/* <p>Or</p> */}
                    <Link to="/secondDive">
                      <p className="option2" onClick={handleSecondDiveButton}>
                        Plan A Second Dive
                      </p>
                    </Link>
                    {/* <p>Or</p> */}
                    <div className="saveContainer">
                    <button onClick={handleSaveDiveButton} id="saveDiveButton" className="option2">
                      Save This Dive
                    </button>
                    </div>
                  </div>
                </div>
                {/* Conditionally render the enter your name input if the user decides to save their first dive data.  */}
                {saveDiveButton ? (
                  <>
                  <div className="saveInfo">
                    <h3>Save This Dive:</h3>
                    <label htmlFor="name" className="label">
                      Enter Your Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="name"
                      value={props.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                    />
                    <input type="submit" value="Save" id="submit" className="option" />
                  </div>
                  <div className="viewDives">
                    <h3>View All Saved Dives:</h3>
                    <Link to="/diveBook">
                      <p className="option2">Click Here</p>
                    </Link>

                  </div>
                    </>
                ) : null}
              </>
            ) : null}
          </>
        ) : null}
      </form>
    </div>
  );
}

export default DivePlan;

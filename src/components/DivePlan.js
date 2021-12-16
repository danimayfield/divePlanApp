import { useState} from "react";
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
                props.setDepthChoice(depth);
              }}
            />
          );
        })}

        {/* Conditionally render the time choices only after a depth choice is chosen - if depth is not chosen, nothing will show */}
        {props.depthChoice > 0 ? (
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
                    props.setTimeChoice(time);
                  }}
                />
              );
            })}
            {/* Conditionally render the safteyStopString only after the timeChoice is chosen */}
            {props.timeChoice > 0 ? (
              <div>
                <h3>For your dive:</h3>
                {/* Conditionally render the deco limit string if the user chooses a dive plan that surpasses their no decompression limit */}
                {props.decoLimit === true ? (
                  <div>
                    <p>{props.decoLimitString}</p>
                  </div>
                ) : null}
                <p>{props.safetyStopString}</p>
                <Link to="/">
                  <p className="button" onClick={refreshPage}>
                    Reset
                  </p>
                </Link>
                <p>Or</p>
                <button onClick={handleSaveDiveButton} id="saveDiveButton">
                  Save My Dive
                </button>
                <p>Or</p>
                <Link to="/secondDive">
                  <p onClick={handleSecondDiveButton}>Plan A Second Dive</p>
                </Link>
                {/* Conditionally render the enter your name input if the user decides to save their first dive data.  */}
                {saveDiveButton ? (
                  <div>
                    <label htmlFor="name">
                      Enter Your Name To Save Your Dive Information:
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={props.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="submit"
                      value="Save"
                      id="submit"
                    />
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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

function SecondDivePlan(props) {
  // State to hold the user's pressure group
  const [pressureGroup, setPressureGroup] = useState("");
  // State to determine if the user reached their deco limit on their second dive
  const [dive2DecoLimit, setDive2DecoLimit] = useState(false);
  // State to hold the users choice of depth for their second dive:
  const [depthChoice2, setDepthChoice2] = useState(0);
  // State to hold the users choice of time for their second dive:
  const [timeChoice2, setTimeChoice2] = useState(0);
  // State to hold whether the user selected to save their dive information or not
  const [saveDive2Button, setSaveDive2Button] = useState(false);

  // Array of time options for surface interval
  const surfaceIntervalOptions = [60, 120, 180];
  // array of depth options
  const depthOptions = [10, 14, 18, 22, 25, 30];
  // array of time spent underwater options
  const timeUnderwater = [
    10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160,
  ];
  //   String to be displayed on the page if the user surpasses their deco limit
  const decoString =
    "Based on your depth and time spent underwater on your first dive, the diver should remain out of the water for a minimum of 6 hours before attempting another dive. This is because you have surpassed your no-decompression limit.";

  useEffect(() => {
    // Function to determine the pressure group the diver would be in depending on their depth, time and surface interval choice
    const pressureGroupF = () => {
      // If else statement of all possible options:
      if (
        props.depthChoice <= 10 &&
        props.timeChoice < 20 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 20 &&
        props.surfaceInterval > 69
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice <= 40 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice <= 40 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 50 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("C");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 50 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 60 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("C");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 60 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 60 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 70 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("D");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 70 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 70 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 80 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("E");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 80 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 80 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 100 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("F");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 100 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 100 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 120 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("G");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 120 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 120 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice <= 140 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("H");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 140 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice === 140 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice >= 146 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("I");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice >= 146 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("C");
      } else if (
        props.depthChoice <= 10 &&
        props.timeChoice >= 146 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 10 &&
        props.surfaceInterval >= 60
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval >= 60
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice <= 40 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("C");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice <= 40 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice <= 40 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 50 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("D");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 50 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 50 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 60 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("E");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 60 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 60 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 70 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("G");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 70 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 70 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 80 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("H");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 80 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 80 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 90 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("I");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 90 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("C");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 90 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 100 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("J");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 100 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("C");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice === 100 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 14 &&
        props.timeChoice >= 120 &&
        props.surfaceInterval >= 60
      ) {
        setPressureGroup("deco");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice === 10 &&
        props.surfaceInterval >= 60
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("C");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice <= 40 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("E");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice <= 40 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice <= 40 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice === 50 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("G");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice === 50 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice === 50 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 18 &&
        props.timeChoice >= 60 &&
        props.surfaceInterval >= 60
      ) {
        setPressureGroup("deco");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice === 10 &&
        props.surfaceInterval >= 60
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("D");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice <= 30 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice === 35 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("F");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice === 35 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice === 35 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 22 &&
        props.timeChoice >= 40 &&
        props.surfaceInterval >= 60
      ) {
        setPressureGroup("deco");
      } else if (
        props.depthChoice <= 25 &&
        props.timeChoice === 10 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 25 &&
        props.timeChoice === 10 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 25 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("C");
      } else if (
        props.depthChoice <= 25 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 25 &&
        props.timeChoice === 25 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("D");
      } else if (
        props.depthChoice <= 25 &&
        props.timeChoice === 25 &&
        props.surfaceInterval === 120
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 25 &&
        props.timeChoice === 25 &&
        props.surfaceInterval === 180
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 25 &&
        props.timeChoice >= 30 &&
        props.surfaceInterval >= 60
      ) {
        setPressureGroup("deco");
      } else if (
        props.depthChoice <= 30 &&
        props.timeChoice === 10 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("B");
      } else if (
        props.depthChoice <= 30 &&
        props.timeChoice === 10 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 30 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval === 60
      ) {
        setPressureGroup("C");
      } else if (
        props.depthChoice <= 30 &&
        props.timeChoice <= 20 &&
        props.surfaceInterval >= 120
      ) {
        setPressureGroup("A");
      } else if (
        props.depthChoice <= 30 &&
        props.timeChoice >= 25 &&
        props.surfaceInterval >= 60
      ) {
        setPressureGroup("deco");
      }
    };
    pressureGroupF();
  }, [props.surfaceInterval, props.depthChoice, props.timeChoice]);

  useEffect(() => {
    //   function to check if a safety stop is required:
    const decoLimitReached = () => {
      // If statement comparing the diver's current pressure group, their new depth choice to the max time allowed underwater before deco-limit has been reached
      if (pressureGroup === "A" && depthChoice2 <= 14 && timeChoice2 >= 90) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "A" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 50
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "A" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 32
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "A" &&
        depthChoice2 === 25 &&
        timeChoice2 >= 25
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "A" &&
        depthChoice2 === 30 &&
        timeChoice2 >= 17
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "B" &&
        depthChoice2 <= 14 &&
        timeChoice2 >= 83
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "B" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 45
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "B" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 28
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "B" &&
        depthChoice2 === 25 &&
        timeChoice2 >= 21
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "B" &&
        depthChoice2 === 30 &&
        timeChoice2 >= 14
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "C" &&
        depthChoice2 <= 14 &&
        timeChoice2 >= 79
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "C" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 41
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "C" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 25
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "C" &&
        depthChoice2 === 25 &&
        timeChoice2 >= 19
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "C" &&
        depthChoice2 === 30 &&
        timeChoice2 >= 12
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "D" &&
        depthChoice2 <= 14 &&
        timeChoice2 >= 76
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "D" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 40
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "D" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 24
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "D" &&
        depthChoice2 === 25 &&
        timeChoice2 >= 18
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "D" &&
        depthChoice2 === 30 &&
        timeChoice2 >= 11
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "E" &&
        depthChoice2 <= 14 &&
        timeChoice2 >= 74
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "E" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 38
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "E" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 22
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "E" &&
        depthChoice2 === 25 &&
        timeChoice2 >= 16
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "E" &&
        depthChoice2 === 30 &&
        timeChoice2 >= 10
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "F" &&
        depthChoice2 <= 14 &&
        timeChoice2 >= 71
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "F" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 36
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "F" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 21
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "F" &&
        depthChoice2 >= 25 &&
        timeChoice2 >= 15
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "G" &&
        depthChoice2 <= 14 &&
        timeChoice2 >= 69
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "G" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 34
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "G" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 19
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "G" &&
        depthChoice2 >= 25 &&
        timeChoice2 >= 14
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "H" &&
        depthChoice2 <= 14 &&
        timeChoice2 >= 66
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "H" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 32
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "H" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 18
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "H" &&
        depthChoice2 >= 25 &&
        timeChoice2 >= 12
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "I" &&
        depthChoice2 <= 14 &&
        timeChoice2 >= 63
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "I" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 30
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "I" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 16
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "I" &&
        depthChoice2 >= 25 &&
        timeChoice2 >= 11
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "J" &&
        depthChoice2 <= 14 &&
        timeChoice2 >= 61
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "J" &&
        depthChoice2 === 18 &&
        timeChoice2 >= 28
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "J" &&
        depthChoice2 === 22 &&
        timeChoice2 >= 15
      ) {
        setDive2DecoLimit(true);
      } else if (
        pressureGroup === "J" &&
        depthChoice2 >= 25 &&
        timeChoice2 >= 10
      ) {
        setDive2DecoLimit(true);
      } else {
        setDive2DecoLimit(false);
      }
    };
    decoLimitReached();
  }, [pressureGroup, depthChoice2, timeChoice2]);

  // function to handle what happens when a user clicks to save their dive
  const handleSaveDive2Button = () => {
    // set the state to true which renders the name input
    setSaveDive2Button(true);
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
      depth2: `${depthChoice2}`,
      time2: `${timeChoice2}`,
      surfaceInterval: `${props.surfaceInterval}`,
    });
  };

  return (
    <div>
      <h2>Second Dive Plan</h2>
      <h4>Your first dive:</h4>
      <p>
        Will be {props.timeChoice} minutes long {props.depthChoice} metres
        underwater.
      </p>

      <form onSubmit={handleFormSubmit}>
        <h3>How long will your surface interval be after this first dive?</h3>
        {surfaceIntervalOptions.map((time) => {
          return (
            <input
              type="button"
              value={`${time} minutes`}
              onClick={() => {
                props.setSurfaceInterval(time);
              }}
            />
          );
        })}
        {/* Conditionally render the deco string if the user surpassed their deco levels & redirect. Otherwise allow them to continue to choose a depth & time for their second dive. */}
        {pressureGroup === "deco" ? (
          <div>
            <p>{decoString}</p>
            <Link to="divePlan">
              <p>Plan your first dive again</p>
            </Link>
            <Link to="diveBook">
              <p>View Dive Book</p>
            </Link>
          </div>
        ) : (
          <div>
            <h3>How deep will your second dive be?</h3>
            {depthOptions.map((depth) => {
              return (
                <input
                  key={depth}
                  type="button"
                  id={`${depth}m`}
                  value={`${depth}m`}
                  onClick={() => {
                    setDepthChoice2(depth);
                  }}
                />
              );
            })}
            {/* Conditionally render the time option only once the depth has been chosen */}
            {depthChoice2 > 0 ? (
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
                        setTimeChoice2(time);
                      }}
                    />
                  );
                })}
                {/* Conditionally render the deco string if necessary again if the user surpasses their deco limit on their second dive. If they don't surpass it, allow them to continue to save their dive to the database */}
                {timeChoice2 > 0 ? (
                  <div>
                    <h3>For your dive:</h3>
                    {/* Conditionally render the deco limit string if the user chooses a dive plan that surpasses their no decompression limit */}
                    {dive2DecoLimit === true || pressureGroup === "deco" ? (
                      <div>
                        <p>{decoString}</p>
                        <p>Please reduce your depth or time to continue.</p>
                      </div>
                    ) : (
                      <div>
                        <p>Must make a safety stop of minimum of 3 mins</p>
                        <button
                          onClick={handleSaveDive2Button}
                          id="saveDiveButton"
                        >
                          Save My Dive
                        </button>
                        {/* Conditionally render the enter your name input if the user decides to save their first dive data.  */}
                        {saveDive2Button ? (
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
                            <input type="submit" value="Save" id="submit" />
                            <Link to="/diveBook">
                              <p>View Your Dives</p>
                            </Link>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        )}
      </form>
    </div>
  );
}

export default SecondDivePlan;

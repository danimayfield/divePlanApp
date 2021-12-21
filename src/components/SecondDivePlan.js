import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

import DepthOptions2 from "./DepthOptions2";
import TimeOptions2 from "./TimeOptions2";

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
  // State to hold which button has been chosen for the depth
  const [depthActive, setDepthActive] = useState("");
  // State to hold which button has been chosen for the time
  const [timeActive, setTimeActive] = useState("");
  // State to hold which button has been chosen for the surface interval
  const [intervalActive, setInvervalActive] = useState("")

  // Array of time options for surface interval
  const surfaceIntervalOptions = [60, 120, 180];
  //   String to be displayed on the page if the user surpasses their deco limit
  const decoString =
    "Based on your depth and time spent underwater on your first dive, the diver should remain out of the water for a minimum of 6 hours before attempting another dive. This is because you have surpassed your no-decompression limit.";

  const decoString2 = "Based on your depth and time spent underwater on your first dive, your chosen surface interval and the depth and time chosen on your second dive you have surpassed your no-decompression limit."

  useEffect(() => {
    // Function to determine the pressure group the diver would be in depending on their depth, time and surface interval choice
    const pressureGroupF = () => {
      // If else statement of all possible max options:
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
    // Function to determine if the pressure group automatically should be set to deco depending on the users first dive choice
    const firstDiveDeco = () => {
      // If statement showing that if the deco limit state is set to true from the first dive then set the pressure group to deco which displays the deco message on the screen and the user cannot move forward planning a second dive.
      if (props.decoLimit === true) {
        setPressureGroup("deco");
      } else {
        setPressureGroup("");
      }
    };
    firstDiveDeco();
  }, [props.decoLimit]);

  useEffect(() => {
    //   function to set whether the deco limit has been reached based on the first and second dive choices:
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
    // Alert the user that their dive information has been saved
    alert("Your dive information is saved in the Dive Book!");
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
    <div className="secondDivePlanContainer wrapper">
      <div className="heading">
        <h2>Second Dive Plan</h2>
        <h3>Your First Dive:</h3>
        <p>
          Will be {props.timeChoice} minutes long, {props.depthChoice} metres
          underwater.
        </p>
      </div>

      <form onSubmit={handleFormSubmit} className="planGrid">
        <div className="surfaceInterval">
          <h3>How Long Will Your Surface Interval Be After Your First Dive?</h3>
          <div className="surfaceIntervalOptions">
            {surfaceIntervalOptions.map((time) => {
              return (
                <>
                  <label htmlFor={`${time}min3`} className="visuallyHidden">
                    {time} minutes
                  </label>
                  <input
                    id={`${time}min3`}
                    type="button"
                    value={`${time} minutes`}
                    onClick={() => {
                      props.setSurfaceInterval(time);
                      setInvervalActive(time);
                    }}
                    className={`option optionLarge ${intervalActive === time ? "active" : null
                      }`}
                  />
                </>
              );
            })}
          </div>
        </div>
        {/* Conditionally render the deco string if the user surpassed their deco levels & redirect. Otherwise allow them to continue to choose a depth & time for their second dive. */}
        {pressureGroup === "deco" ? (
          <div className="deco">
            <h3>Caution! Deco Limit Reached!</h3>
            <p>{decoString}</p>
            <div className="redirectButtons">
              <Link to="divePlan">
                <p className="button2">Redo Your First Dive</p>
              </Link>
              <Link to="diveBook">
                <p className="button2">View Dive Book</p>
              </Link>
            </div>
          </div>
        ) : null}
        {(props.surfaceInterval) && (pressureGroup !== "deco") ? (
          <>
            <div className="depthChoice">
              <h3>How Deep Will Your Second Dive Be?</h3>
              <div className="depthOptionButtons">
                {/* map through the depth array and return each option as a button */}
                {props.depthOptions.map((depth) => {
                  return (
                    <DepthOptions2
                      depth={depth}
                      setDepthChoice2={setDepthChoice2}
                      setDepthActive={setDepthActive}
                      depthActive={depthActive} />
                  );
                })}
              </div>
            </div>
            {/* Conditionally render the time option only once the depth has been chosen */}
            {depthChoice2 > 0 ? (
              <>
                <div className="timeChoice">
                  <h3>Choose Your Time:</h3>
                  <div className="timeOptionButtons">
                    {/* map through the timeUnderwater array and return each option as a button */}
                    {props.timeUnderwater.map((time) => {
                      return (
                        <TimeOptions2
                          time={time}
                          setTimeChoice2={setTimeChoice2}
                          setTimeActive={setTimeActive}
                          timeActive={timeActive} />
                      );
                    })}
                  </div>
                </div>
                {/* Conditionally render the deco string if necessary again if the user surpasses their deco limit on their second dive. If they don't surpass it, allow them to continue to save their dive to the database */}
                {timeChoice2 > 0 ? (
                  <>
                    <div className="diveInfo">
                      <h3>For Your Dive:</h3>
                      {/* Conditionally render the deco limit string if the user chooses a dive plan that surpasses their no decompression limit */}
                      {dive2DecoLimit === true || pressureGroup === "deco" ? (
                        <div className="decoDiveInfo">
                          <h4>Caution! Deco Limit Reached!</h4>
                          <p>{decoString2}</p>
                          <p><strong>Please reduce your depth or time underwater or increase your surface interval time to continue.</strong></p>
                        </div>
                      ) : (
                        <>
                          <p>You must make a safety stop of a minimum of 3 mins</p>
                          <button
                            onClick={handleSaveDive2Button}
                            id="saveDiveButton"
                            className={saveDive2Button ? 'none' : null}
                          >
                            Save My Dive
                          </button>
                          {/* Conditionally render the enter your name input if the user decides to save their first dive data.  */}
                          {saveDive2Button ? (
                            <div className="saveSecondDiveInfo" >
                              <div className="saveSpace">
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
                              <Link to="/diveBook">
                                <p className="button">View Your Dives</p>
                              </Link>
                            </div>
                          ) : null}
                        </>
                      )}
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

export default SecondDivePlan;

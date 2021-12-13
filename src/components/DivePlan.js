import { useState, useEffect } from "react";

function DivePlan() {
  // state to hold user depth choice
  const [depthChoice, setDepthChoice] = useState(0);
  // state to hold user time choice
  const [timeChoice, setTimeChoice] = useState(0);
  // state to hold safety stop requirement
  const [safetyStop, setSafetyStop] = useState(false);
  // state to hold safety stop string to be displayed on page
  const [safetyStopString, setSafetyStopString] = useState("");

  // array of depth options
  const depthOptions = [10, 14, 18, 22, 25, 30];
  // array of time spent underwater options
  const timeUnderwater = [
    10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160,
  ];

  useEffect(() => {
    const safetyStopRequired = () => {
      if (depthChoice === 10 && timeChoice >= 160) {
        setSafetyStop(true);
      } else if (depthChoice === 14 && timeChoice >= 116) {
        setSafetyStop(true);
      } else if (depthChoice === 18 && timeChoice >= 51) {
        setSafetyStop(true);
      } else if (depthChoice === 22 && timeChoice >= 32) {
        setSafetyStop(true);
      } else if (depthChoice === 25 && timeChoice >= 25) {
        setSafetyStop(true);
      } else if (depthChoice === 30) {
        setSafetyStop(true);
      } else {
        setSafetyStop(false);
      }
    };

    safetyStopRequired();
  }, [depthChoice, timeChoice]);

  useEffect(() => {
    const safetyStopStringF = () => {
      if (safetyStop === true) {
        setSafetyStopString("You need to make a safety stop");
      } else {
        setSafetyStopString("You do NOT need to make a safety stop");
      }
    };

    safetyStopStringF();

  }, [safetyStop]);



  return (
    <div>
      <h2>1st Dive</h2>
      <form>
        <h3>Choose your depth:</h3>
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

        {depthChoice > 0 ? (
          <div>
            <h3>Choose your time:</h3>
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
            {timeChoice > 0 ? <p>{safetyStopString}</p> : null}
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default DivePlan;

import firebase from "../firebase";
import { useState, useEffect } from "react";

function DiveBook() {
  // Set state to hold the array of dives
  const [diveBook, setDiveBook] = useState([]);
  // state to hold whether the see more button has been clicked.

  // Use effect to hold call to firebase database for information
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (response) => {
      // set the response value to the variable data
      const data = response.val();

      // declare an empty array variable which we will use to set our state array
      let newArray = [];

      // loop through the data from firebase with a for in loop and grab the data with the index of key on each loop
      for (let key in data) {
        // push the data at the index of key to the newArray
        newArray.push(data[key]);
      }

      // set the state of the DiveBook to the newArray array
      setDiveBook(newArray);
    });
  }, []);

  return (
    <div>
      <h2>All Dive Plans</h2>
      <ul className="diveBookGrid">
        {
          //  Map through the diveBook state array and use the information gathered below:
          diveBook.map((dive, index) => {
            return (
              <li key={index} className="card">
                <h3>{dive.name}'s Dive Plan:</h3>
                <h4>{dive.name}'s First Dive:</h4>
                <div className="infoRow">
                  <div className="infoPiece">
                    <p>Depth:</p>
                    <p>{dive.depth} m</p>
                  </div>
                  <div className="infoPiece">
                    <p>Time:</p>
                    <p>{dive.time} mins</p>
                  </div>
                </div>
                <p>
                  <strong>Safety Stop:</strong> {dive.safetyStop}
                </p>
                <p>{dive.decoLimit}</p>
                {dive.depth2 ? (
                  <div className="flex">
                    <h4>{dive.name}'s Second Dive:</h4>
                    <div className="infoPiece2 ">
                      <p>Surface Interval:</p>
                      <p>{dive.surfaceInterval} mins</p>
                    </div>
                    <div className="infoRow">
                      <div className="infoPiece">
                        <p>Depth:</p>
                        <p>{dive.depth2} m</p>
                      </div>
                      <div className="infoPiece">
                        <p>Time:</p>
                        <p>{dive.time2} mins</p>
                      </div>
                    </div>
                    <p>
                      <strong>Safety Stop:</strong> You should make a safety stop for 3 minutes (minimum) at 5
                      metres on this dive
                    </p>
                  </div>
                ) : null}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default DiveBook;

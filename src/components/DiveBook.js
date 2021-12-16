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
      <ul>
        {
          //  Map through the diveBook state array and use the information gathered below:
          diveBook.map((dive, index) => {
            return (
              <li key={index}>
                <h3>{dive.name}'s Dive Plan:</h3>
                <p>
                  {dive.name} plans to dive to {dive.depth} metres for {dive.time} minutes
                </p>
                <p>Safety Stop: {dive.safetyStop}</p>
                <p>{dive.decoLimit}</p>
                {dive.depth2 ? (
                  <div>
                    <h4>{dive.name}'s second dive:</h4>
                    <p>
                      After a surface interval of {dive.surfaceInterval} minutes, {dive.name} plans to dive to {dive.depth2} metres for {dive.time2} minutes
                    </p>
                    <p>You should make a safety stop for 3 minutes (minimum) at 5 metres on this dive</p>
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

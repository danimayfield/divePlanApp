import firebase from "../firebase";
import { useState, useEffect } from "react";
import DiveBookCard from "./DiveBookCard";

function DiveBook() {
  // Set state to hold the array of dives
  const [diveBook, setDiveBook] = useState([]);
  // state to hold whether the see more button has been clicked.
  const [selectedIds, setSelectedIds] = useState([]);
  

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
    <div className="wrapper">
      <h2>All Dive Plans</h2>
      <ul className="diveBookWrapper">
        <div className="diveBookContainer">
        {
          //  Map through the diveBook state array and use the information gathered below:
          diveBook.map((dive, index) => {
            return (
              <DiveBookCard dive={dive} index={index} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
            );
          })
        }
        </div>
      </ul>
    </div>
  );
}

export default DiveBook;

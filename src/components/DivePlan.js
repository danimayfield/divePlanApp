import {useState} from 'react';

function DivePlan() {
    // state to hold user choice
    const [ depthChoice, setDepthChoice ] = useState(0)

    // array of depth options
    const depthOptions = [
        10, 14, 18, 20, 22 
    ]

    // array of time spent underwater options
    const timeUnderwater = [
        10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160
    ]

    const handleDepthChoice = () => {
        console.log()
    }


    return (
      <div >
          <h2>1st Dive</h2>
        <form>
            <h3>Choose your depth:</h3>
            {
            depthOptions.map((depth) => {
                return (
                    <input key={depth} type="button" id={`${depth}m`} value={`${depth}m`} onClick={handleDepthChoice} />
                )
                
            })
            }   
            <h3>Choose your time:</h3>
            {
            timeUnderwater.map((time) => {
                return (
                    <input key={time} type="button" id={`${time}mins`} value={`${time}mins`} />
                )
                
            })
            } 
        </form>
      </div>
    );
  }
  
  export default DivePlan;
  
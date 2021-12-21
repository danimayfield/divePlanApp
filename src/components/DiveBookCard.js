import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function DiveBookCard({ dive, index, selectedIds, setSelectedIds }) {


    const checkIfIdExists = (index) => {
        // If statement to check if the index/id is already in the state array
        if (selectedIds.includes(index)) {
            // If the index/id is already in the state array then filter the selectedIds array to set all the other indexes that are not selected to the selectedIds Array. Essentially removing/filtering the clicked index/id
            setSelectedIds(selectedIds.filter(id => id !== index))

            return
        } else {
            // If the index is not already included in the array then add the new index to the array.
            setSelectedIds([...selectedIds, index])
        }

    }


    return (
        <li
            key={index}
            className="card"
            tabindex="0"
            role="button"
            aria-label="click to see more information"
            onClick={() => checkIfIdExists(index)}
            onKeyUp={ console.log("did it!") }>
            <h3>{dive.name}'s Dive Plan:</h3>
            <i
                id={index}
            >
                {selectedIds.includes(index) ? <IoIosArrowUp /> : <IoIosArrowDown />
                }


            </i>
            {selectedIds.includes(index) ? (
                <>
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
                                <strong>Safety Stop:</strong> You should make a safety
                                stop for 3 minutes (minimum) at 5 metres on this dive
                            </p>
                        </div>
                    ) : null}
                </>
            ) : null}
        </li>
    )
}

export default DiveBookCard
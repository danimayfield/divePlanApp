

function Options ({depth, setDepthChoice, setDepthActive, depthActive}) {

 return (
    <>
    <label htmlFor={`${depth}m`} className="visuallyHidden">
      {depth}m
    </label>
    <input
      key={depth}
      type="button"
      id={`${depth}m`}
      value={`${depth}m`}
      onClick={() => {
        setDepthChoice(depth);
        setDepthActive(depth);
      }}
      className={`option ${
        depthActive === depth ? "active" : null
      }`}
    />
  </>
 )
}



export default Options
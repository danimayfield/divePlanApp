
function DepthOptions2({ depth, setDepthChoice2, setDepthActive, depthActive }) {
    return (
        <>
            <label htmlFor={`${depth}m2`} className="visuallyHidden">
                {depth}m
            </label>
            <input
                key={depth}
                type="button"
                id={`${depth}m2`}
                value={`${depth}m`}
                onClick={() => {
                    setDepthChoice2(depth);
                    setDepthActive(depth)
                }}
                className={`option ${depthActive === depth ? "active" : null
                    }`}
            />
        </>
    )
}

export default DepthOptions2
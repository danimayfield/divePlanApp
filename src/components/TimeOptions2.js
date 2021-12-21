
function TimeOptions2({ time, setTimeChoice2, setTimeActive, timeActive }) {
    return (
        <>
        <label htmlFor={`${time}mins2`} className="visuallyHidden">
          {time}mins
        </label>
        <input
          key={time}
          type="button"
          id={`${time}mins2`}
          value={`${time}mins`}
          onClick={() => {
            setTimeChoice2(time);
            setTimeActive(time);
          }}
          className={`option ${timeActive === time ? "active" : null
            }`}
        />
      </>
    )
}

export default TimeOptions2
function Options2({time, setTimeChoice, setTimeActive, timeActive}) {
    return (
        <>
            <label htmlFor={`${time}mins`} className="visuallyHidden">
                {time}mins
            </label>
            <input
                key={time}
                type="button"
                id={`${time}mins`}
                value={`${time}mins`}
                onClick={() => {
                    setTimeChoice(time);
                    setTimeActive(time);
                }}
                className={`option optionWidth ${timeActive === time ? "active" : null
                    }`}
            />
        </>
    )
}

export default Options2
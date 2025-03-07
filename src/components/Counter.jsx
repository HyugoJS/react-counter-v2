const Counter = (props) => {
  const counter = props.state;
  const setCounter = props.setState;

  return (
    <>
      <div className="buttons-div">
        {counter > 0 && (
          <button
            className="minus-button"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            {" "}
            -
          </button>
        )}
        <h2>{counter}</h2>
        {counter < 10 && (
          <button
            className="plus-button"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            {" "}
            +
          </button>
        )}
      </div>
      <button
        className="reset-button"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Counter;

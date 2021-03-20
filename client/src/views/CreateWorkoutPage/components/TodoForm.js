import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [link, setLink] = useState(props.edit ? props.edit.value : "");
  const [time, setTime] = React.useState("");

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange1 = (e) => {
    setInput(e.target.value);
  };

  const handleChange3 = (e) => {
    setLink(e.target.value);
  };

  const onChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      time: time,
      link: link,
    });
    setInput("");
    setTime("");
    setLink("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Add Workout"
            value={input}
            onChange={handleChange1}
            name="text"
            required
            className="todo-input"
            style={{ overflowX: "hidden" }}

            // ref={inputRef}
          />
          <input
            placeholder="Time in sec."
            value={time}
            onChange={onChange}
            name="text"
            type="number"
            required
            className="todo-input"
            style={{ overflowX: "hidden", width: "130px", paddingRight: "5px" }}

            // ref={inputRef}
          />
          <input
            placeholder="Add a tutorial"
            value={link}
            onChange={handleChange3}
            name="url"
            className="todo-input"
            required
            style={{ overflowX: "hidden", width: "130px", paddingRight: "5px" }}
            // ref={inputRef}
          />

          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <input
              placeholder="Regimen Name"
              name="text"
              required
              className="todo-input"
              style={{ overflowX: "hidden", width: "350px" }}
            ></input>
            <select
              id="dropdown"
              value={input}
              onChange={handleChange1}
              name="text"
              required
              className="todo-input"
              style={{ overflowX: "hidden", width: "350px", cursor: "pointer" }}
            >
              <option value="N/A">Category</option>
              <option value="1">Body</option>
              <option value="2">Chest</option>
              <option value="3">Leg</option>
              <option value="4">Back</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              placeholder="Description"
              required
              className="todo-input"
              style={{
                overflowX: "hidden",
                display: "flex",
                flexGrow: "2",
                margin: "0px 18px",
              }}
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              placeholder="Add Workout"
              value={input}
              onChange={handleChange1}
              name="text"
              required
              className="todo-input"
              style={{ overflowX: "hidden", width: "350px" }}

              // ref={inputRef}
            />
            <input
              placeholder="Time in sec."
              value={time}
              onChange={onChange}
              name="text"
              type="number"
              required
              className="todo-input"
              style={{
                overflowX: "hidden",
                width: "130px",
                paddingRight: "5px",
              }}

              // ref={inputRef}
            />
            <input
              placeholder="Add a tutorial"
              value={link}
              onChange={handleChange3}
              name="url"
              className="todo-input"
              required
              style={{
                overflowX: "hidden",
                width: "130px",
                paddingRight: "5px",
              }}
              // ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button">
              Add to workout
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;

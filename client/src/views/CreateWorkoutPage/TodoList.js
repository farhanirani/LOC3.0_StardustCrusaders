import React, { useState } from "react";
// import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";

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

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.time} sec.
      </div>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        <a
          href={todo.link}
          style={{ color: "#fff", textDecoration: "none", cursor: "pointer" }}
        >
          Tutorial{" "}
        </a>
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        {/* <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        /> */}
      </div>
    </div>
  ));
};

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (
      !todo.text ||
      (/^\s*$/.test(todo.text) && !todo.value) ||
      (/^\s*$/.test(todo.value) && !todo.link) ||
      /^\s*$/.test(todo.link)
    ) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Create your Training Regimen</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;

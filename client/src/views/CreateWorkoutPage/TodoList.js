import React, { useState } from "react";
// import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";
import axios from "axios";

function TodoList() {
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [link, setLink] = useState("");
  const [time, setTime] = React.useState("");
  const [title, setTitle] = useState("");
  const [calory, setCalory] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [farhan, setFarhan] = useState([]);

  const handleChange1 = (e) => {
    setInput(e.target.value);
  };

  const handleChange2 = (e) => {
    setLink(e.target.value);
  };

  const handleChange3 = (event) => {
    setTime(event.target.value);
  };

  const handleChange4 = (e) => {
    setTitle(e.target.value);
  };

  const handleChange5 = (e) => {
    setCalory(e.target.value);
  };

  const handleChange6 = (e) => {
    setCategory(e.target.value);
  };

  const handleChange7 = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input, time, link);
    console.log(todos);

    setTodos((todos) => [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text: input,
        time: time,
        link: link,
      },
    ]);

    setInput("");
    setTime("");
    setLink("");
  };
  const tokenn = localStorage.getItem("auth-token");

  const handleSubmit2 = async (e) => {
    console.log(todos);

    var stt = "";
    for (var i = 0; i < todos.length; i++) {
      var temp = "" + todos[i].text + ";" + todos[i].time + ";" + todos[i].link;
      stt += temp + "$";
    }
    console.log(stt);

    const newworkout = {
      name: title,
      desc: description,
      category: category,
      calories: calory,
      steps: stt,
    };
    console.log(newworkout);
    try {
      const asd = await axios.post("/api/workout/create", newworkout, {
        headers: { "x-auth-token": tokenn },
      });
      history.push("/workout/" + asd.data._id);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

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
    console.log(newTodos);
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
      <h1 style={{ color: "#000", fontWeight: "700" }}>
        Create your Training Workout
      </h1>
      <form onSubmit={addTodo} className="todo-form">
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <input
              placeholder="Workout Name"
              name="text"
              value={title}
              onChange={handleChange4}
              required
              className="todo-input"
              style={{ overflowX: "hidden", width: "320px" }}
            ></input>
            <input
              placeholder="KCal"
              name="text"
              value={calory}
              onChange={handleChange5}
              type="number"
              required
              className="todo-input"
              style={{
                overflowX: "hidden",
                width: "70px",
                paddingRight: "2px",
              }}
            ></input>
            <select
              id="dropdown"
              value={category}
              onChange={handleChange6}
              name="text"
              required
              className="todo-input"
              style={{ overflowX: "hidden", width: "320px", cursor: "pointer" }}
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
            <input
              placeholder="Workout Description"
              value={description}
              onChange={handleChange7}
              name="text"
              required
              className="todo-input"
              style={{
                overflowX: "hidden",
                display: "flex",
                flexGrow: "2",
                margin: "0px 20px",
              }}

              // ref={inputRef}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              placeholder="Step Information"
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
              onChange={handleChange3}
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
              placeholder="Tutorial Link"
              value={link}
              onChange={handleChange2}
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
          </form>
        </>
        <Fab
          variant="extended"
          onClick={handleSubmit2}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "25%",
            left: "50%",
            marginLeft: "-50px",
            background: "#4bb543",
            color: "#fff",
            padding: "0px 20px",
          }}
        >
          {/* <NavigationIcon style={{ marginRight: "5px" }} /> */}
          Submit
        </Fab>
      </form>
      {todos &&
        todos.map((todo, index) => (
          <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
          >
            <div>{todo.text}</div>
            <div>{todo.time} sec.</div>
            <div>
              <a href={todo.link} style={{ color: "#fff", cursor: "pointer" }}>
                Tutorial
              </a>
            </div>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
            </div>
          </div>
        ))}
    </>
  );
}

export default TodoList;

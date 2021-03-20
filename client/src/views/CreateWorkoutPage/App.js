import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Fab from "@material-ui/core/Fab";
import { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import "./style.css";

const slides = [
  {
    id: 0,
    url:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 1,
    url:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
  },
  {
    id: 2,
    url:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    url:
      "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  },
  {
    id: 4,
    url:
      "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
  },
];

const BgSlide = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 8000),
    8
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{
        ...props,
        backgroundImage: `url(${item.url})`,
        zIndex: "-1",
      }}
    />
  ));
};

function App() {
  return (
    <div className="todo-app">
      <BgSlide></BgSlide>
      <TodoList />
      <div
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fab
          variant="extended"
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
      </div>
    </div>
  );
}

export default App;

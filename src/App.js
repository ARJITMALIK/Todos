import "./App.css";
import Navbar from "./comps/navbar";
import Todos from "./comps/todos";
import Footer from "./comps/footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./comps/AddTodo";
import About from "./comps/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") == null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  let styles = {
    height: "100vh",
  };

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (taskTitle, taskDesc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: taskTitle,
      desc: taskDesc,
    };
    setTodos([...todos, myTodo]);
  };
  return (
    <Router>
      <div style={styles}>
        <Navbar title="Todos List" />
        {/* <Switch> */}
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Switch>
          <Route
            exact
            path="/about"
            render={() => {
              return <>
               <About />
              </>;
            }}
          ></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

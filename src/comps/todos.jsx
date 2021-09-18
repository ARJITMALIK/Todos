import React from "react";
import TodoItem from "./todoItem";

export default function todos(props) {
  return (
    <div className="container">
      <h1 className="text-center fw-bold my-3">Tasks</h1>
      {props.todos.length === 0 ? (
        <div className="text-center"> 
          <p>Hurray! No tasks to do, you can relax now!</p>
        </div>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem
              todoItem={todo}
              key={todo.sno}
              onDelete={props.onDelete}
            />
          );
        })
      )}
    </div>
  );
}

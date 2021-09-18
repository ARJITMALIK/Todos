import React, { useState } from "react";

export default function AddTodo(props) {
  const [taskTitle, setTitle] = useState("");
  const [taskDesc, setDesc] = useState("");

  const createTodo = (e) => {
    e.preventDefault();
    if (!taskTitle || !taskDesc) {
      alert("Title or description cannot be blank!");
    } else {
      props.addTodo(taskTitle, taskDesc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <form onSubmit={createTodo}>
        <div className="mb-3">
          <label htmlFor="taskInput" className="form-label">
            Add Title
          </label>
          <input
            type="text"
            className="form-control"
            id="taskInput"
            value={taskTitle}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="taskDesc" className="form-label">
            Add Task
          </label>
          <input
            type="text"
            className="form-control"
            id="taskDesc"
            value={taskDesc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary" >
          Create Task
        </button>
      </form>
    </div>
  );
}

import React from "react";

export default function todoItem(props) {
  return (
    <div className="card shadow p-3 mb-5 bg-body rounded">
      <div className="m-0 d-flex justify-content-between"> 
        <h4 className="fw-bold fs-2 mx-2 d-inline">{props.todoItem.title}</h4>
        <button className="btn btn-success btn-sm fw-bold" onClick={()=>{return props.onDelete(props.todoItem)}}>Completed</button>
      </div>
      <h2 className="m-2 fs-5 fw-lighter">{props.todoItem.desc}</h2>
    </div>
  );
}

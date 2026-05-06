import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'  

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
   const navigate = useNavigate()

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!task || !priority || !dueDate) {
    alert("Please fill all fields!");
    return;
  }

  const newTask = {
    task,
    priority,
    dueDate,
    dateCreated: new Date().toLocaleString()
  };



  axios.post("http://localhost:5000/tasks", newTask)
    .then(result => {
      console.log("Saved:", result.data);
      addTask(result.data);
      navigate('/');
      setTask("");
  setPriority("");
  setDueDate("");
    })
    .catch(err => console.error(err));
};



  return (
    <form onSubmit={handleSubmit}>
    <div className="row g-3">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="col-md-3">
        <select
          className="form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <div className="col-md-3">
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="col-md-2">
        <button className="btn btn-success w-100">
          Add Task
        </button>
      </div>
    </div>
    </form>
    
  );
}

export default TaskForm;
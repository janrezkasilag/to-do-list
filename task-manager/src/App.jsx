import axios from "axios";
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import HistoryTable from "./components/HistoryTable";
import PriorityChart from "./components/PriorityChart";
import HighPriorityTable from "./components/HighPriorityTable";

function App() {
const [tasks, setTasks] = useState([]);
const [history, setHistory] = useState([]);

useEffect(() => {
  fetchTasks();
  fetchHistory();
}, []);

const fetchTasks = async () => {
  const res = await axios.get("http://localhost:5000/tasks");
  setTasks(res.data);
};

const fetchHistory = async () => {
  const res = await axios.get("http://localhost:5000/history");
  setHistory(res.data);
};

  const addTask = async () => {
  const res = await axios.get("http://localhost:5000/tasks");
  setTasks(res.data);
};

  const deleteTask = async (id) => {
  console.log("Deleting ID:", id);

  if (!id) {
    console.log("Invalid ID!");
    return;
  }

  try {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);

  } catch (err) {
    console.log("DELETE ERROR:", err);
  }
};

  const moveToHistory = async (id) => {
  try {
    await axios.put(`http://localhost:5000/tasks/${id}/move`);

    // Refresh both lists
    fetchTasks();
    fetchHistory();

  } catch (err) {
    console.log(err);
  }
};


  return (
    <div className="container">

        <div className="card-header bg-primary text-white">
          <h4>Task Manager</h4>
        </div>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
      <i class="bi bi-house me-1"></i>
      Home
      </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
      <i class="bi bi-list-task me-1"></i>
      Task-List</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
      <i class="bi bi-clock-history me-1"></i>
      History</button>
  </li>
</ul>

<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
     <div class="container text-center">
    <div class="row">
      <div class="col">
        <PriorityChart tasks={tasks} />
      </div>
      <div class="col">
          <HighPriorityTable tasks={tasks} />
      </div>
    </div>
  </div>
  </div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <TaskForm addTask={addTask} />
     <TaskTable tasks={tasks} deleteTask={deleteTask} moveToHistory={moveToHistory} />
  </div>
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
     <HistoryTable history={history} />
      
    </div>
</div>

      </div>
  );
}

export default App;
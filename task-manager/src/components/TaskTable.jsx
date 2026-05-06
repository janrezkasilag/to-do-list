function TaskTable({ tasks, deleteTask, moveToHistory }) {
  return (
    <>
      <h5 className="mt-4">Task List</h5>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Date Created</th> {/* NEW */}
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((t) => (
  <tr key={t._id}>
    <td>{t.task}</td>
    <td>{t.priority}</td>
    <td>{t.dueDate}</td>
    <td>{t.dateCreated}</td>
    <td>
      <button
        className="btn btn-warning btn-sm me-1"
        onClick={() => moveToHistory(t._id)}
      >
        Move
      </button>

      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(t._id)}
      >
        Delete
      </button>
    </td>
  </tr>
))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TaskTable;
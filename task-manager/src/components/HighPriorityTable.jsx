function HighPriorityTable({ tasks }) {
  // Filter only HIGH priority
  const highPriorityTasks = tasks.filter(
    (t) => t.priority === "High"
  );

  return (
    <>
      <h5 className="mt-5">High Priority Tasks</h5>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-danger">
            <tr>
              <th>Task</th>
              <th>Due Date</th>
            </tr>
          </thead>

          <tbody>
            {highPriorityTasks.length > 0 ? (
              highPriorityTasks.map((t, index) => (
                <tr key={index}>
                  <td>{t.task}</td>
                  <td>{t.dueDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
                  No high priority tasks
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HighPriorityTable;
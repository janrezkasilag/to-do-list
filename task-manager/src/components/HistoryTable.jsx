function HistoryTable({ history }) {
  return (
    <>
      <h5>History</h5>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Completed Date</th> {/* NEW */}
            </tr>
          </thead>

          <tbody>
            {history.map((t, index) => (
              <tr key={index}>
                <td>{t.task}</td>
                <td>{t.priority}</td>
                <td>{t.dueDate}</td>
                <td>{t.completedDate}</td> {/* NEW */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HistoryTable;
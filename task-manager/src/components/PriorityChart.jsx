import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function PriorityChart({ tasks }) {
  // Count priorities
  const counts = {
    High: 0,
    Medium: 0,
    Low: 0
  };

  tasks.forEach((t) => {
    if (counts[t.priority] !== undefined) {
      counts[t.priority]++;
    }
  });

  // Convert to chart format
  const data = [
    { name: "High", value: counts.High },
    { name: "Medium", value: counts.Medium },
    { name: "Low", value: counts.Low }
  ];

  const COLORS = ["#dc3545", "#ffc107", "#198754"];

  return (
    <div className="mt-5 text-center">
      <h5>Priority Distribution</h5>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>

      {/* Total Tasks */}
      <h6 className="mt-3">
        Total Tasks: <strong>{tasks.length}</strong>
      </h6>
    </div>
  );
}

export default PriorityChart;
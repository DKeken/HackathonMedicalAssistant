import { useStore } from "effector-react";
import {
  ResponsiveContainer,
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
} from "recharts";
import { tableModel } from "../DiagnosesTable";

const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

export const DiagnosesChart = () => {
  const { data } = useStore(tableModel);

  const chartData = [
    { name: "Соответствие стандарту", value: data?.type1 },
    {
      name: "Частичное соответствие",
      value: data?.type2,
    },
    { name: "Несоответствие", value: data?.type3 },
  ];

  return (
    <div
      style={{
        background: "#F9F9F9",
        boxShadow: "6px 4px 21px rgba(0, 0, 0, 0.17)",
        borderRadius: 16,
        margin: "16px 0px",
        height: "30%",
        padding: "50px 35%",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={chartData}
            fill="#8884d8"
            innerRadius={"50%"}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend align="right" verticalAlign="middle" layout="vertical" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

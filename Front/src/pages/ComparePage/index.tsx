import { Select, Typography } from "antd";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Иванов A. A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Иванов A. A B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Иванов A. A C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Иванов A. A D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Иванов A. A E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Иванов A. A F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const ComparePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100% - 32px)",
        background: "#fff",
        borderRadius: 16,
        margin: "16px 0px",
        padding: 16,
      }}
    >
      <Typography.Text style={{ margin: "0 16px 0 0" }}>
        Отделение:
      </Typography.Text>
      <Select style={{ width: 200 }}></Select>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="amt" fill="#AEEBE8 " stroke="#AEEBE8" />
          <Bar dataKey="pv" barSize={20} fill="#43C5BF" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparePage;

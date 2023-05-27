import { DiagnosesChart } from "../DiagnosesChart/ui";
import { Form, Typography } from "antd";
import { FilterForm } from "../FilterForm";
import { DiagnosesTable } from "../DiagnosesTable";

export const DataDisplay = () => {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          width: "15vw",
          boxShadow: "28px 0px 100px rgba(0, 0, 0, 0.068)",
          margin: "16px 16px 16px 0px",
          padding: 16,
          borderRadius: 16,
        }}
      >
        <FilterForm form={form} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: "83.2%",
        }}
      >
        <Typography.Title level={4}>Сегодня по больнице:</Typography.Title>
        <DiagnosesChart />
        <div
          style={{
            height: "59%",
            overflow: "auto",
            margin: "0 0 16px 0",
            borderRadius: 16,
            boxShadow: "6px 4px 21px rgba(0, 0, 0, 0.17)",
          }}
        >
          <DiagnosesTable />
        </div>
      </div>
    </div>
  );
};

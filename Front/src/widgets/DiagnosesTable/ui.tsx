import { Table } from "antd";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { tableModel } from "./model";

export const columns = [
  {
    title: "Дата и время посещения",
    dataIndex: "dateOfService",
  },
  {
    title: "Диагноз",
    dataIndex: "diagnosis",
  },
  {
    title: "Исследования",
    dataIndex: "prescription",
  },
  {
    title: "Врач",
    dataIndex: "position",
  },
];

export const DiagnosesTable = () => {
  const { data: tableData, fetchData } = useStore(tableModel);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Table
      dataSource={tableData?.protocolAnalysisResults}
      columns={columns}
      pagination={false}
    />
  );
};

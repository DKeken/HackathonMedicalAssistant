import { Button, Form, FormInstance, Select } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { useStore } from "effector-react";
import {
  $fileIds,
  getIDFilesFx,
  selectFileId,
  getPositionsFx,
  $positions,
} from "./model";
import React from "react";
import { UploadButton } from "../../entities/UploadButton";
import { Excel } from "antd-table-saveas-excel";
import { columns } from "../DiagnosesTable/ui";
import { tableModel } from "../DiagnosesTable/model";

interface filterFormProps {
  form: FormInstance<any> | undefined;
}

export const FilterForm: React.FC<filterFormProps> = ({ form }) => {
  const fileIds = useStore($fileIds);
  const positions = useStore($positions);
  const { data: tableData } = useStore(tableModel);

  React.useEffect(() => {
    getIDFilesFx();
  }, [getIDFilesFx]);

  React.useEffect(() => {
    getPositionsFx();
  }, [getPositionsFx]);

  const handleClick = () => {
    if (!tableData?.protocolAnalysisResults) {
      return;
    }
    const excel = new Excel();
    excel
      .addSheet("test")
      .addColumns(columns)
      .addDataSource(tableData?.protocolAnalysisResults, {
        str2Percent: true,
      })
      .saveAs("Excel.xlsx");
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        style={{
          width: "100%",
          height: "96%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form.Item label={"Специализация:"} style={{ width: "100%" }}>
          <Select
            options={positions.map((positions) => ({
              label: positions,
              value: positions,
            }))}
          ></Select>
        </Form.Item>
        <Form.Item label={"Загруженный файл:"} style={{ width: "100%" }}>
          <Select
            onChange={selectFileId}
            options={fileIds.map((fileId) => ({
              label: fileId,
              value: fileId,
            }))}
          />
        </Form.Item>
        <Form.Item style={{ width: "100%" }}>
          <UploadButton />
          <Button
            style={{ width: "100%" }}
            icon={<DownloadOutlined />}
            onClick={handleClick}
          >
            Скачать отчёт
          </Button>
        </Form.Item>
      </Form>
      <img src="../../../public/Logos.svg" style={{ width: "100%" }} />
    </>
  );
};

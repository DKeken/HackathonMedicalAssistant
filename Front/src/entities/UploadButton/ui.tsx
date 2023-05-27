import { Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { fileChanged } from "./model";

export const UploadButton = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleBeforeUpload = async (file: string | Blob) => {
    if (file) {
      const formData = new FormData();
      formData.append("FileUpload", file);

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}PrescriptionProtocol/PostSingleFile`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data);

        fileChanged();
        messageApi.open({
          type: "success",
          content: "Успешно!",
        });
      } catch (error) {
        console.error(error);
        messageApi.open({
          type: "error",
          content: "Ошибка при отправке, попробуйте еще раз",
        });
      }
    } else {
      console.error("No file selected");
      messageApi.open({
        type: "error",
        content: "Произошла ошибка, попробуйте еще раз",
      });
    }

    return false;
  };

  return (
    <Upload
      beforeUpload={handleBeforeUpload}
      showUploadList={false}
      style={{ width: "100%", marginBottom: 8 }}
    >
      {contextHolder}

      <Button
        icon={<UploadOutlined />}
        style={{ width: "100%", marginBottom: 8 }}
      >
        Загрузить данные
      </Button>
    </Upload>
  );
};

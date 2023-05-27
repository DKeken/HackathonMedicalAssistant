import {
  DesktopOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Layout as AntLayout, type MenuProps } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Content, Footer, Sider } = AntLayout;

type MenuItem = {
  key: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  label: React.ReactNode;
  target: string;
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  target: string,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    target,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Дашборд", "1", "/", <DesktopOutlined />),
  getItem("Сравнение", "2", "compare", <LineChartOutlined />),
];

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = ({ key }: { key: string }): void => {
    const foundItem = items.find((item) => item.key === key);
    const { target } = foundItem || {};

    if (target) {
      navigate(target);
    }
  };

  const getSelectedKey = (): Array<string> => {
    const path = location.pathname;
    const target = path === "/" ? path : path.split("/")[1];
    const foundItem = items.find((item) => item.target === target);

    return foundItem ? [foundItem.key] : ["1"];
  };

  return (
    <AntLayout style={{ height: "100%" }}>
      <Sider theme="light" collapsed>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
          selectedKeys={getSelectedKey()}
          style={{ padding: "16px 4px" }}
        />
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "80px",
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f0f0f06f",
          }}
        >
          <UserOutlined style={{ fontSize: "16px", color: "#1677ff" }} />
        </div>
      </Sider>
      <Content style={{ margin: "0 16px", height: "100%" }}>
        <Outlet />
      </Content>
    </AntLayout>
  );
};

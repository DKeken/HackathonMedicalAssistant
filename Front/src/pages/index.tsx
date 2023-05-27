import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../app/Layout";

const DashboardPage = lazy(() => import("./DashboardPage"));
const ComparePage = lazy(() => import("./ComparePage"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/compare" element={<ComparePage />} />
      </Route>
    </Routes>
  );
};

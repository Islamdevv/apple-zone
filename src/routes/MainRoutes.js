import React from "react";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import EditPage from "../pages/EditPage";
import ListProduct from "../components/product/ListProduct";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditPage />,
      id: 2,
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: 3,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

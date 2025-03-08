import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "auth",
    element: <h3>News Layout</h3>
  },
  {
    path: "login",
    element: <h3>Login Pages</h3>
  },
  {
    path: "*",
    element: <h2>Error pages</h2>
  }
]);

export default router;
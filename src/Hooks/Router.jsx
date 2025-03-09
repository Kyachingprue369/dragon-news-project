import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import CategoryNews from "../Pages/CategoryNews";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
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
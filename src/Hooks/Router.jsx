import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Components/Layout/AuthLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import NewsDetails from "../Pages/NewsDetails";



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
        path: "/category/:_id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params._id}`)
      }
    ]
  },
  {
    path: "news/:_id",
    element: <NewsDetails></NewsDetails>,
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params._id}`)
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }
    ]
  },

  {
    path: "*",
    element: <h2>Error pages</h2>
  }
]);

export default router;
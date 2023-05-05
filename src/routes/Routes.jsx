import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Blog from "../pages/Shared/Blog/Blog";
import Login from "../pages/Shared/Login/Login";
import ChefDetails from "../pages/Shared/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import RecipeData from "../pages/Shared/RecipeData/RecipeData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chefDetails",
        element: <ChefDetails></ChefDetails>,
      },
      {
        path: "/chefDetails/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://b7a10-chef-recipe-hunter-server-side-ovi-khan-ovi-khan.vercel.app/chefData/${params.id}`
          ),
      },
      {
        loader: 'recipeData',
        element: <RecipeData></RecipeData>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Blog from "../pages/Shared/Blog/Blog";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])
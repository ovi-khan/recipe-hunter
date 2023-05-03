import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Blog from "../pages/Shared/Blog/Blog";
import Login from "../pages/Shared/Login/Login";
import ChefDetails from "../pages/Shared/ChefDetails/ChefDetails";


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
                path: 'chefDetails',
                element: <ChefDetails></ChefDetails>
            },     
            {
                path: '/chefDetails/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])
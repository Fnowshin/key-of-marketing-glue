import { createBrowserRouter } from "react-router-dom";
import Courses from "../../layout/Courses";
import Home from "../../layout/Pages/Home/Home";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/courses',
        element: <Courses></Courses>
    }
])
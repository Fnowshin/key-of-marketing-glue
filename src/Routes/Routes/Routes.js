import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../layout/Pages/Courses";
import Home from "../../layout/Pages/Home/Home";
import SidebarTopicDetails from "../../layout/Pages/SidebarTopicDetails";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:7000/topics') 
             }  

        ]
           
    },
    {
        path: '/course/:id',
        element: <SidebarTopicDetails></SidebarTopicDetails>,
        loader: ({params}) => fetch(`http://localhost:7000/course/${params.id}`)
    }
   
]);
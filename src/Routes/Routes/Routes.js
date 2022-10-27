import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../layout/Pages/Blog";
import CheckOut from "../../layout/Pages/CheckOut/CheckOut";
import Conditions from "../../layout/Pages/Conditions";
import CourseDetails from "../../layout/Pages/CourseDetails/CourseDetails";

import Courses from "../../layout/Pages/Courses";
import Home from "../../layout/Pages/Home/Home";
import LogIn from "../../layout/Pages/LogIn/LogIn";
import Registration from "../../layout/Pages/Registration/Registration";
import SidebarTopicDetails from "../../layout/Pages/SidebarTopicDetails";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:7000/topics') 
             },
            
             {
                path:'/signup',
                element:<Registration></Registration>
             },
             {
                path: '/login',
                element: <LogIn></LogIn>
             },
             {
                path: '/blog',
                element: <Blog></Blog>,
             },
             
             
        ]
           
    },
    {
        path: '/course/:id',
        element: <SidebarTopicDetails></SidebarTopicDetails>,
        loader: ({params}) => fetch(`http://localhost:7000/course/${params.id}`)
    },
    {
        path: '/details/:id',
        element: <CourseDetails></CourseDetails>,
        
    }, 
    {
        path:'/checkout',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
    },
    {
        path: '/faq',
        element:<Conditions></Conditions>
      }  

   
   
   
]);
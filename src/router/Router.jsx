import { createBrowserRouter } from "react-router"
import RootLayout from "../layouts/RootLayout.jsx"
import Home from "../pages/home/Home.jsx";
import Register from "../pages/register/Register.jsx";
import SignIn from "../pages/register/SignIn.jsx";
import JobDetails from "../pages/JobDetails/JobDetails.jsx";
import PrivateRoute from "../Routes/PrivateRoute.jsx";
import JobApply from "../pages/JobApply/JobApply.jsx";
import MyApplications from "../MyApplication/MyApplications.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: "/jobApply/:id",
          element: <PrivateRoute><JobApply /></PrivateRoute>,
        },
        {
          path: '/myapplications',
          element: <PrivateRoute><MyApplications /></PrivateRoute>,
        },
        {
          path: "/jobs/:id",
          Component: JobDetails,
          loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path: "/register",
            Component: Register,
        },
        {
            path: "/signin",
            Component: SignIn,
        },
        
        
    ]
  },
]);

export default Router
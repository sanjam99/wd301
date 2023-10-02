import { createBrowserRouter, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AccountLayout from "../layouts/account"
import ProjectDetails from "../pages/project_details";
import ProjectContainer from "../pages/projects/ProjectContainer";
import ProtectedRoute from "./ProtectedRoute"
import NewTask from "../pages/tasks/NewTask";
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Projects from "../pages/projects"
import Members from "../pages/members"
import Logout from "../pages/logout";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/account/projects" replace /> },
    {
      path: "/signin", 
      element: <Signin />
    },
  {
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/signup", 
    element: <Signup />
  },
  { 
    path: "/logout", 
    element: <Logout /> 
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
{
  path: "projects",
  element: <ProjectContainer />,
  children: [
    { index: true, element: <Projects /> },
    {
      path: ":projectID",
      element: <ProjectDetails />,
      children: [
        { index: true, element: <></> 
        },
        {
          path: "tasks",
          children: [
            { index: true, element: <Navigate to="../" /> },
            {
              path: "new",
              // Render `NewTask` component
              element: <NewTask />,
            },
            {
              path: ":taskID",
              children: [{ index: true, element: <>Show Task Details</> 
              }],
            },
          ],
        },
      ],
    },
  ],
},
      {
        path: "members",
        element: (<Members />)
      },
    ],
  },
]);

export default router;
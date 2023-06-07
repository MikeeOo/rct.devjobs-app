import { createBrowserRouter } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import JobPage from "./components/pages/JobPage";
import AddJobPage from "./components/pages/AddJobPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/job/:id",
        element: <JobPage />,
    },
    {
        path: "/u/add-job/:id",
        element: <AddJobPage />,
    },
]);

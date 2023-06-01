import { createBrowserRouter } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import JobPage from "./components/pages/JobPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <div>TEST Login</div>,
    },
    {
        path: "/register",
        element: <div>TEST Register</div>,
    },
    {
        path: "/job/:id",
        element: <JobPage />,
    },
]);

import { createBrowserRouter } from "react-router-dom";

import HomePage from "./components/pages/HomePage";

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
        path: "/test",
        element: <div>TEST Test</div>,
    },
]);

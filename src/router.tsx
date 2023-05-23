import { createBrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/test",
        element: (
            <div className="h-screen bg-black text-2xl text-white">TEST</div>
        ),
    },
]);

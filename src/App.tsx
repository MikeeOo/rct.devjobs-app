import { RouterProvider } from "react-router-dom";

import { router } from "./router";

export default function App(): JSX.Element {
    return (
        <div className="h-screen bg-black text-white">
            <RouterProvider router={router} />
        </div>
    );
}

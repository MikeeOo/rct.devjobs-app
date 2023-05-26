import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import Header from "./components/modules/Header";

export default function App(): JSX.Element {
    return (
        <div className="h-screen bg-black text-white">
            <RouterProvider router={router} />
        </div>
    );
}

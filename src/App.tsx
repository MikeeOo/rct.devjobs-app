import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App(): JSX.Element {
    return (
        // <div className="min-h-screen bg-[#111827] text-white">
        <div className="min-h-screen bg-base-100 text-accent-content">
            <RouterProvider router={router} />
        </div>
    );
}

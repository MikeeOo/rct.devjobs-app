import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import Header from "./components/modules/Header";

export default function App(): JSX.Element {
    return (
        <div className="h-screen bg-black text-2xl text-white">
            <Header />
            <RouterProvider router={router} />
        </div>
    );
}

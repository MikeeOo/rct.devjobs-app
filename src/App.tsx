import { RouterProvider } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import { customTheme } from "./theme";
import { router } from "./router";

export default function App(): JSX.Element {
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <div className="h-screen bg-[#111827] text-white">
                <RouterProvider router={router} />
            </div>
        </Flowbite>
    );
}

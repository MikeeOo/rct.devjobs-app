import { RouterProvider } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { router } from "./router";

const customTheme: CustomFlowbiteTheme = {
    button: {
        color: {
            primary: "#FFFFF",
        },
        outline: {
            color: "red",
        },
    },
};

export default function App(): JSX.Element {
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <div className="h-screen bg-black text-white">
                <RouterProvider router={router} />
            </div>
        </Flowbite>
    );
}

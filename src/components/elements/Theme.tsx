import { useEffect } from "react";
import { themeChange } from "theme-change";

type Props = {};

export default function Theme({}: Props) {
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <select className="select-primary select" data-choose-theme>
            <option>Select Theme</option>
            <option value="light">light</option>
            <option value="dark">dark</option>
        </select>
    );
}

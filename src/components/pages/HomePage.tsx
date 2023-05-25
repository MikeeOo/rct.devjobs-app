import { Link } from "react-router-dom";

export default function HomePage(): JSX.Element {
    return (
        <div className="text-2xl ">
            <p>Devjobs-app React front setup</p>
            <Link to="test">Router Test</Link>
        </div>
    );
}

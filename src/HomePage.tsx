import { Link } from "react-router-dom";

export default function HomePage(): JSX.Element {
    return (
        <div className="h-screen bg-black text-2xl text-white">
            <p>Devjobs-app React front setup</p>
            <Link to="test">Router Test</Link>
        </div>
    );
}

import { Link } from "react-router-dom";
import Header from "../modules/Header";

export default function HomePage(): JSX.Element {
    return (
        <>
            <Header />
            <div className="text-2xl ">
                <p>Devjobs-app React front setup</p>
                <Link to="test">Router Test</Link>
            </div>
        </>
    );
}

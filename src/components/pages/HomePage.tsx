import { Link } from "react-router-dom";
import Header from "../modules/Header";
import Search from "../modules/Search";
import { Alert, Button } from "flowbite-react";

export default function HomePage(): JSX.Element {
    return (
        <div>
            <Header>
                <Search />
            </Header>
            <div className="mt-64 font-sans text-3xl">
                <p>Devjobs-app React front setup</p>
                <Link to="test">Router Test</Link>
            </div>
            <Button color={`primary`}>xd</Button>
        </div>
    );
}

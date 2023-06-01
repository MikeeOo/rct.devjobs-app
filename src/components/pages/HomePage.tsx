import Header from "../modules/Header";
import Search from "../modules/Search";
import Display from "../modules/Display";

export default function HomePage(): JSX.Element {
    return (
        <>
            <Header />
            <Search />
            <Display />
        </>
    );
}

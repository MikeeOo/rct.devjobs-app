import { FaRegUserCircle, FiChevronDown } from "react-icons/all";
import Logo from "../../atoms/Logo";

type Props = {};

export default function Header({}: Props): JSX.Element {
    return (
        <div className="flex items-center justify-between bg-indigo-500 px-6 pb-20 pt-8">
            <Logo />
            <button className="flex items-center justify-between space-x-3 rounded-2xl bg-slate-800 px-4 py-3 text-lg">
                <FaRegUserCircle size="1.3rem" />
                <FiChevronDown size="1.3rem" />
            </button>
        </div>
    );
}

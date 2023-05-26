import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { FaRegUserCircle, FiChevronDown, FiChevronUp } from "react-icons/all";

import Logo from "../../atoms/Logo";

type Props = {};

export default function Header({}: Props): JSX.Element {
    return (
        <div className="flex items-center justify-between bg-indigo-500 px-6 pb-20 pt-8">
            <Logo />
            <Popup
                arrow={false}
                closeOnDocumentClick
                trigger={(open) => (
                    <button className="flex items-center justify-between space-x-3 rounded-2xl bg-slate-800 px-4 py-3 text-lg">
                        {open ? (
                            <>
                                <FaRegUserCircle size="1.3rem" />
                                <FiChevronUp size="1.3rem" />
                            </>
                        ) : (
                            <>
                                <FaRegUserCircle size="1.3rem" />
                                <FiChevronDown size="1.3rem" />
                            </>
                        )}
                    </button>
                )}
            >
                <nav className=" mt-4">
                    <ul>
                        <li className="">
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </Popup>
        </div>
    );
}

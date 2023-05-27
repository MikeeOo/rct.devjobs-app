import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import {
    FaRegUserCircle,
    FiChevronDown,
    FiChevronUp,
    FiLogIn,
    MdOutlineAppRegistration,
} from "react-icons/all";

import { Button } from "flowbite-react";

import Logo from "../atoms/Logo";

type Props = {
    children: JSX.Element;
};

export default function Header({ children }: Props): JSX.Element {
    return (
        <div className="relative flex items-center justify-between bg-[#272e5a] px-6 pb-20 pt-8">
            <Logo />

            {/* <Popup
                arrow={false}
                closeOnDocumentClick
                trigger={(open: boolean): JSX.Element => (
                    <button className="flex items-center justify-between space-x-3 rounded-md bg-white px-4 py-3 text-lg text-[#272e5a]">
                        <FaRegUserCircle size="1.3rem" />
                        {open ? (
                            <FiChevronUp size="1.3rem" />
                        ) : (
                            <FiChevronDown size="1.3rem" />
                        )}
                    </button>
                )}
            >
                <nav className=" mt-4">
                    <ul>
                        <li className="">
                            <div>
                                <Link
                                    to="/login"
                                    className=" flex items-center"
                                >
                                    <FiLogIn />
                                    Login
                                </Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/register" className=" flex items-center">
                                <MdOutlineAppRegistration />
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Popup> */}
            {children}
        </div>
    );
}

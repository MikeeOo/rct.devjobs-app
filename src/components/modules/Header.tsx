import { Link } from "react-router-dom";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";

import Logo from "../atoms/Logo";

type Props = {
    children: JSX.Element;
};

export default function Header({ children }: Props): JSX.Element {
    return (
        // <div className="relative flex items-center justify-between bg-[#272e5a] px-6 pb-20 pt-8">
        <div className="relative">
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        alt="Flowbite Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/public/logo.svg"
                    />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {/* <Dropdown
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown> */}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to="/login">
                        <Navbar.Link href="">Login</Navbar.Link>
                    </Link>
                    <Link to="/register">
                        <Navbar.Link active>Register</Navbar.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
            {/* {children} */}
        </div>
    );
}

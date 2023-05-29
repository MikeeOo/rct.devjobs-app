import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";

type Props = {};

const testIsLogged: boolean = false;

export default function Header({}: Props): JSX.Element {
    return (
        <Navbar fluid rounded>
            <Link to="/">
                <Logo />
            </Link>
            <div className="flex gap-1">
                {testIsLogged ? (
                    <Dropdown
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                rounded
                                placeholderInitials="BG"
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Placeholder</Dropdown.Item>
                        <Dropdown.Item>Placeholder</Dropdown.Item>
                        <Dropdown.Item>Placeholder</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                ) : (
                    <>
                        <Button color="primary">Log in</Button>
                        <Button outline gradientDuoTone="purpleToBlue">
                            Sign up
                        </Button>
                    </>
                )}
            </div>
        </Navbar>
    );
}

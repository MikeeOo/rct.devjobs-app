import { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { RiFilter2Fill, AiOutlineSearch, MdLocationOn } from "react-icons/all";

type Props = {};

export default function Search({}: Props) {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className=" mx-auto mb-12 mt-10 flex w-full max-w-[90%] gap-1">
                <TextInput
                    sizing="md"
                    type="text"
                    placeholder="Filter by title, companies, expertise…"
                    className="w-full"
                />
                <Button onClick={() => setShow(true)} color="primary">
                    <RiFilter2Fill size="1.25rem" />
                </Button>
                <Button outline gradientDuoTone="purpleToBlue">
                    <AiOutlineSearch size="1.25rem" />
                </Button>
            </div>
            <Modal
                show={show}
                onClose={() => setShow(false)}
                popup
                size="sm"
                dismissible
                className="h-screen"
            >
                <Modal.Header className=" ml-3">
                    <span>Filter</span>
                </Modal.Header>
                <Modal.Body>
                    <TextInput
                        icon={MdLocationOn}
                        placeholder="Filter by location..."
                        className=" mt-1"
                    />
                    <div className=" ml-0.5 mt-4 flex items-center gap-4">
                        <Checkbox
                            color="black"
                            id="remember"
                            style={{
                                accentColor: "#7e3af2",
                            }}
                        />
                        <Label htmlFor="remember">Full time Only</Label>
                    </div>

                    <Button
                        outline
                        gradientDuoTone="purpleToBlue"
                        className=" mt-4 w-full"
                    >
                        Search
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

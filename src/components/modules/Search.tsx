import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { RiFilter2Fill, AiOutlineSearch, MdLocationOn } from "react-icons/all";

type Props = {};

export default function Search({}: Props) {
    return (
        <>
            <div className=" mx-auto mb-12 mt-10 flex w-full max-w-[90%] gap-1">
                <TextInput
                    sizing="md"
                    type="text"
                    placeholder="Filter by title, companies, expertise…"
                    className="w-full"
                />
                <Button
                    onClick={() => window.my_modal_1.showModal()}
                    color="primary"
                >
                    <RiFilter2Fill size="1.25rem" />
                </Button>
                {/* <Button onClick={() => setShow(true)} color="primary">
                    <RiFilter2Fill size="1.25rem" />
                </Button> */}
                <Button outline gradientDuoTone="purpleToBlue">
                    <AiOutlineSearch size="1.25rem" />
                </Button>
            </div>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">
                        ✕
                    </button>
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click on ✕ button to close
                    </p>
                    <Button
                        outline
                        gradientDuoTone="purpleToBlue"
                        className=" mt-4 w-full"
                    >
                        Search
                    </Button>
                </form>
            </dialog>
            {/* <Modal
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
            </Modal> */}
        </>
    );
}

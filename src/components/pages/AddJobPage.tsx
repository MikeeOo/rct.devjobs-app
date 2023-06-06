import {
    Button,
    Card,
    Label,
    Select,
    TextInput,
    Textarea,
} from "flowbite-react";
import Header from "../modules/Header";

type Props = {};

export default function AddJobPage({}: Props) {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-[90%] py-12">
                <Card className="mb-6">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Add a new job offer:
                    </h5>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="company-name"
                                value="Company name"
                            />
                        </div>
                        <TextInput
                            id="company-name"
                            placeholder="The name of your company..."
                            required
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="company-website"
                                value="Company website"
                            />
                        </div>
                        <TextInput
                            id="company-website"
                            placeholder="Your company website..."
                            required
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="company-position"
                                value="Position"
                            />
                        </div>
                        <TextInput
                            id="company-position"
                            placeholder="Position description..."
                            required
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="company-location"
                                value="Location"
                            />
                        </div>
                        <TextInput
                            id="company-location"
                            placeholder="Your company location..."
                            required
                        />
                    </div>

                    <div id="select">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="contract-type"
                                value="Contract type"
                            />
                        </div>
                        <Select id="contract-type" required>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Freelance</option>
                        </Select>
                    </div>

                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="offer-description"
                                value="Offer description"
                            />
                        </div>
                        <Textarea
                            id="offer-description"
                            placeholder="Describe your offer..."
                            required
                            rows={12}
                        />
                    </div>
                </Card>
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Card className="mb-6">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Requirements:</p>
                    </h5>
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="requirements-description"
                                value="Requirements description"
                            />
                        </div>
                        <Textarea
                            id="requirements-description"
                            placeholder="We are looking for..."
                            required
                            rows={10}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="placeholder-bullet-point"
                                value="placeholder-bullet-point"
                            />
                        </div>
                        <TextInput
                            id="placeholder-bullet-point"
                            placeholder="placeholder-bullet-point"
                            required
                        />
                    </div>
                </Card>
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Card className="mb-12">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Role:</p>
                    </h5>
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="role-description"
                                value="Role description"
                            />
                        </div>
                        <Textarea
                            id="role-description"
                            placeholder="Your role will be..."
                            required
                            rows={10}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="placeholder-bullet-point"
                                value="placeholder-bullet-point"
                            />
                        </div>
                        <TextInput
                            id="placeholder-bullet-point"
                            placeholder="placeholder-bullet-point"
                            required
                        />
                    </div>
                </Card>
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Card>
                    <Button outline gradientDuoTone="purpleToBlue">
                        Post Offer
                    </Button>
                </Card>
            </div>
        </>
    );
}

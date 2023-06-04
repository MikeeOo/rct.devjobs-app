import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import Header from "../modules/Header";

type Props = {};

export default function AddJobPage({}: Props) {
    return (
        <>
            <Header />
            <div className="mt-12">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Add a new job offer:</p>
                    </h5>
                    {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p> */}
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
                                htmlFor="company-name"
                                value="Company webpage"
                            />
                        </div>
                        <TextInput
                            id="company-name"
                            placeholder="Your company webpage..."
                            required
                        />
                    </div>
                </Card>
            </div>
        </>
    );
}

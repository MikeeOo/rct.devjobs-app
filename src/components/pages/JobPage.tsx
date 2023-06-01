import { Button, Card } from "flowbite-react";
import Header from "../modules/Header";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { get } from "../../utils/apiUtils";

type Props = {};

interface IJob {
    company?: string;
    logo?: string;
    logoBackground?: string;
    position?: string;
    postedAt?: string;
    contract?: string;
    location?: string;
    website?: string;
    apply?: string;
    description?: string;
    requirements?: {
        content?: string;
        items?: Array<string>;
    };
    role?: {
        content?: string;
        items?: Array<string>;
    };
}

export default function JobPage({}: Props) {
    const { id } = useParams();

    const [job, setJob] = useState<IJob>({});

    useEffect(() => {
        try {
            get(`/jobs/${id}`, setJob);
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <>
            <Header />
            <div className="mt-12">
                <Card className=" relative mx-auto w-full max-w-[90%]">
                    <div className="absolute left-2/4 top-0 flex h-[3.125rem] w-[3.125rem] -translate-x-2/4 -translate-y-2/4 transform items-center justify-center rounded-xl bg-gradient-to-tr from-[#0891B2] to-[#6C2BD9] font-mono text-xl font-bold">
                        xD
                    </div>
                    <div className=" m-auto text-center">
                        <h5 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {job.company}
                        </h5>
                        <div className="mt-2 dark:text-gray-400">
                            <p>{`${job.company
                                ?.toLowerCase()
                                .replace(/\s/g, "")}.com`}</p>
                        </div>
                        <a
                            href={`${job.website}`}
                            className="mt-6 inline-block"
                        >
                            <Button outline gradientDuoTone="purpleToBlue">
                                Company Site
                            </Button>
                        </a>
                    </div>
                </Card>
            </div>
            <div className="py-8 ">
                <Card className="mx-auto w-full max-w-[90%]">
                    <div className="flex gap-4 dark:text-gray-400">
                        <p>{job.postedAt}</p>
                        <p>{job.contract}</p>
                    </div>
                    <h5 className="-mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {job.position}
                    </h5>
                    <p className="-mt-2 font-bold text-[#6C2BD9]">
                        {job.location}
                    </p>
                    <Button
                        outline
                        gradientDuoTone="purpleToBlue"
                        className="mt-8"
                    >
                        Apply Now
                    </Button>
                    <p className="mt-4 leading-[1.65] dark:text-gray-400">
                        {job.description}
                    </p>
                    <h5 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Requirements
                    </h5>
                    <p className="leading-[1.65] dark:text-gray-400">
                        {job.requirements?.content}
                    </p>
                    <ul>
                        {job.requirements?.items?.map((requirement) => (
                            <li className="mb-3 flex gap-4 dark:text-gray-400 ">
                                <div>🍆</div>
                                <p>{requirement}</p>
                            </li>
                        ))}
                    </ul>
                    <h5 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        What You Will Do
                    </h5>
                    <p className="leading-[1.65] dark:text-gray-400">
                        {job.role?.content}
                    </p>
                    <ul>
                        {job.role?.items?.map((requirement) => (
                            <li className="mb-3 flex gap-4 dark:text-gray-400 ">
                                <div>🍆</div>
                                <p>{requirement}</p>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
            <footer className="pb-8">
                <Card className="mx-auto w-full max-w-[90%]">
                    <Button outline gradientDuoTone="purpleToBlue">
                        Apply Now
                    </Button>
                </Card>
            </footer>
        </>
    );
}

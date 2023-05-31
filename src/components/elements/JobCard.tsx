import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

type Props = {
    postedAt: string;
    contract: string;
    position: string;
    company: string;
    location: string;
};

export default function JobCard({
    postedAt,
    contract,
    position,
    company,
    location,
}: Props) {
    return (
        <li className="pb-12">
            <Link to="/test">
                <Card href="#" className=" relative mx-auto w-full max-w-[90%]">
                    <div className=" left-1/8 absolute top-0 flex h-[3.125rem] w-[3.125rem] -translate-y-2/4 transform items-center justify-center rounded-xl bg-gradient-to-tr from-[#0891B2] to-[#6C2BD9] font-mono text-xl font-bold">
                        xD
                    </div>
                    <div className="mt-4 flex gap-4 dark:text-gray-400">
                        <p>{postedAt}</p>
                        <p>{contract}</p>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {position}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {company}
                    </p>
                    <p className=" mt-6 font-bold text-[#6C2BD9]">{location}</p>
                </Card>
            </Link>
        </li>
    );
}

import { useEffect, useState } from "react";
import { get } from "../../utils/apiUtils";
import JobCard from "../elements/JobCard";

type Props = {};

export default function Display({}: Props) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        try {
            get("/jobs", setJobs);
        } catch (e) {
            console.error(e);
        }
    }, []);

    console.log(jobs);

    return (
        <ul>
            {jobs.map((job: any) => (
                <JobCard key={job._id} {...job} />
            ))}
        </ul>
    );
}

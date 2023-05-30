import { useEffect, useState } from "react";
import { get } from "../../utils/apiUtils";

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
        <div>
            <ul>
                {jobs.map((job) => (
                    <li>{job.company}</li>
                ))}
            </ul>
        </div>
    );
}

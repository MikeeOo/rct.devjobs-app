import { RiFilter2Fill, AiOutlineSearch } from "react-icons/all";

type Props = {};

export default function Search({}: Props) {
    return (
        <div className=" absolute bottom-0 left-2/4 flex w-full max-w-[88%] -translate-x-2/4 translate-y-2/4 rounded-md bg-[#19202D] p-4">
            <input
                className="w-full min-w-[120px] bg-[#19202D] focus:outline-none"
                placeholder="Filter by title, companies, expertise…"
            />
            <button className="bg-[#19202D] p-3">
                <RiFilter2Fill size="1.25rem" />
            </button>
            <button className="rounded-md bg-[#5964E0] p-3">
                <AiOutlineSearch size="1.25rem" />
            </button>
            {/* <button>
                <MdLocationOn />
            </button> */}
        </div>
    );
}

import Popup from "reactjs-popup";
import { RiFilter2Fill, AiOutlineSearch, MdLocationOn } from "react-icons/all";
// import Checkbox from "react-custom-checkbox";

type Props = {};

export default function Search({}: Props) {
    return (
        <div className=" absolute bottom-0 left-2/4 flex w-full max-w-[88%] -translate-x-2/4 translate-y-2/4 rounded-md bg-[#19202D] p-4">
            <input
                className="w-full min-w-[120px] bg-[#19202D] focus:outline-none"
                placeholder="Filter by title, companies, expertise…"
            />
            <Popup
                modal
                trigger={
                    <button className="bg-[#19202D] p-3">
                        <RiFilter2Fill size="1.25rem" />
                    </button>
                }
            >
                <div className=" rounded-md  bg-[#19202D] text-white">
                    <div className="flex items-center space-x-4 border-b border-gray-600 p-6">
                        <MdLocationOn color="#5964E0" size="1.5rem" />
                        <input
                            className=" bg-[#19202D] focus:outline-none"
                            placeholder="Filter by location..."
                        />
                    </div>
                    {/* <label className=" block space-x-4 p-6">
                        <Checkbox />
                        <span> Full Time Only</span>
                    </label> */}
                    <button className="block w-full bg-[#5964E0] p-4 text-center">
                        Search
                    </button>
                    <div className="mb-4 flex items-center">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Default checkbox
                        </label>
                    </div>
                </div>
            </Popup>
            <button className="rounded-md bg-[#5964E0] p-3">
                <AiOutlineSearch size="1.25rem" />
            </button>
        </div>
    );
}

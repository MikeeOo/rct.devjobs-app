import { AiOutlineMail, AiFillLock } from "react-icons/all";

type Props = {};

export default function LoginPage({}: Props) {
    return (
        <div className="flex h-screen items-center justify-center bg-primary">
            <div className="card w-full max-w-[90%] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Log in</h2>

                    <div className="card bg-base-100 py-2">
                        <div className="form-control relative py-2">
                            <label className="label">
                                <span className="label-text text-accent-content">
                                    Email
                                </span>
                            </label>
                            <div className="relative text-neutral-content focus-within:text-accent-content">
                                <input
                                    type="email"
                                    className="input w-full rounded-none border-b-accent-content border-l-base-100 border-r-base-100 border-t-base-100 bg-base-100 pl-10 shadow-accent-content focus:outline-none"
                                />
                                <AiOutlineMail className="absolute top-[50%] h-6 w-6 -translate-y-[50%] translate-x-1" />
                            </div>
                        </div>

                        <div className="form-control py-2">
                            <label className="label">
                                <span className="label-text text-accent-content">
                                    Password
                                </span>
                            </label>
                            <div className="relative text-neutral-content focus-within:text-accent-content">
                                <input
                                    type="password"
                                    className="input w-full rounded-none border-b-accent-content border-l-base-100 border-r-base-100 border-t-base-100 bg-base-100 pl-10 shadow-accent-content focus:outline-none"
                                />
                                <AiFillLock className="absolute top-[50%] h-6 w-6 -translate-y-[50%] translate-x-1" />
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-primary-focus text-neutral-content hover:bg-primary hover:text-accent-content">
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Formik, Field, Form } from "formik";
import { AiFillLock, AiOutlineMail, AiFillUnlock } from "react-icons/all";

type Props = {};

export default function RegisterPage({}: Props) {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="card w-full max-w-[90%] bg-primary shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Sign up</h2>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            repeatedPassword: "",
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        <Form>
                            <div className="card bg-primary py-2">
                                <div className="form-control py-2">
                                    <label className="label">
                                        <span className="label-text text-accent-content">
                                            Email
                                        </span>
                                    </label>
                                    <div className="relative text-neutral-content focus-within:text-accent-content">
                                        <Field
                                            name="email"
                                            type="email"
                                            className="input w-full rounded-none border-b-accent-content border-l-primary 
                                            border-r-primary border-t-primary bg-primary pl-10 text-white shadow-accent-content focus:outline-none"
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
                                        <Field
                                            name="password"
                                            type="password"
                                            className="input w-full rounded-none border-b-accent-content border-l-primary border-r-primary border-t-primary bg-primary pl-10 
                                            text-white shadow-accent-content focus:outline-none"
                                        />
                                        <AiFillUnlock className="absolute top-[50%] h-6 w-6 -translate-y-[50%] translate-x-1" />
                                    </div>
                                </div>

                                <div className="form-control py-2">
                                    <label className="label">
                                        <span className="label-text text-accent-content">
                                            Repeat password
                                        </span>
                                    </label>
                                    <div className="relative text-neutral-content focus-within:text-accent-content">
                                        <Field
                                            name="repeatedPassword"
                                            type="password"
                                            className="input w-full rounded-none border-b-accent-content border-l-primary border-r-primary border-t-primary bg-primary pl-10 
                                            text-white shadow-accent-content focus:outline-none"
                                        />
                                        <AiFillLock className="absolute top-[50%] h-6 w-6 -translate-y-[50%] translate-x-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button
                                    type="submit"
                                    className="btn bg-base-100 hover:bg-base-200 hover:text-accent-content focus:outline-none"
                                >
                                    Sign up
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

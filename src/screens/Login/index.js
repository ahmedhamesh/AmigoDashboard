const Login = () => {

    return (
        <div className={'background'}>
            <div className="overflow-hidden mt-40 flex flex-col text-center h-full">
                <div className="p-10">
                    <h2 className="text-center text-3xl leading-9
                         font-extrabold text-gray-200"
                    >
                        Login To Your Account
                    </h2>
                    <form>
                        <div className="flex justify-center">
                            <div className=" lg:w-1/3 md:w-2/3 w-full">
                                <label
                                    className="block uppercase tracking-wide  text-white-400 text-xs mt-5 font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300"
                                />
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs mt-5 font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="*******"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                type="submit"
                                className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:shadow-outline-teal active:bg-teal-400 active:outline-none transition duration-150 ease-in-out"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;
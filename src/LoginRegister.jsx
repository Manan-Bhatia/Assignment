import React from "react";
import { useRef, useEffect } from "react";

export default function LoginRegister() {
    const loginRef = useRef(null);
    const registerRef = useRef(null);
    const loginForm = useRef(null);
    const registerForm = useRef(null);

    useEffect(() => {
        loginRef.current.addEventListener("click", () => {
            loginForm.current.classList.remove("hidden");
            registerForm.current.classList.add("hidden");
        });
        registerRef.current.addEventListener("click", () => {
            loginForm.current.classList.add("hidden");
            registerForm.current.classList.remove("hidden");
        });
    }, []);

    return (
        <>
            <section className="flex -z-50">
                <div className="w-screen h-screen">
                    <div className="bg-black h-screen px-8 md:px-20 flex flex-col py-24 md:justify-center">
                        <fieldset className="flex justify-center md:gap-10">
                            <div>
                                <input
                                    ref={loginRef}
                                    id="login"
                                    type="radio"
                                    name="loginregister"
                                    value="login"
                                    className="peer/login appearance-none"
                                    defaultChecked
                                />
                                <label
                                    htmlFor="login"
                                    className="text-white text-xl md:text-5xl px-3 md:px-5 py-1 md:py-2 peer-checked/login:bg-accent-500"
                                >
                                    Login
                                </label>
                            </div>
                            <div>
                                <input
                                    ref={registerRef}
                                    id="register"
                                    type="radio"
                                    name="loginregister"
                                    value="register"
                                    className="appearance-none peer/register"
                                />
                                <label
                                    htmlFor="register"
                                    className="text-white text-xl md:text-5xl px-3 md:px-5 py-1 md:py-2 peer-checked/register:bg-accent-500"
                                >
                                    Register
                                </label>
                            </div>
                        </fieldset>
                        <div
                            ref={loginForm}
                            className="flex justify-center px-0 py-8 md:p-28"
                        >
                            <form action="#" className="mt-10">
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    required
                                    className="mb-5 md:mb-10 text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                                />
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    className="mb-5 md:mb-10 text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                                />

                                <div className="flex justify-center">
                                    <button className="bg-accent-500 hover:bg-accent-500/75 font-normal md:font-bold text-2xl text-white  px-7 py-2.5 md:py-3.5">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div ref={registerForm} className="hidden flex justify-center px-0 py-8 md:p-16">
                            <form action="#" className="mt-10">
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    required
                                    className="mb-5 md:mb-10 text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                                />
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="mb-5 md:mb-10 text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                                />
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    className="mb-5 md:mb-10 text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                                />

                                <div className="flex justify-center">
                                    <button className="bg-accent-500 hover:bg-accent-500/75 font-normal md:font-bold text-2xl text-white  px-7 py-2.5 md:py-3.5">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

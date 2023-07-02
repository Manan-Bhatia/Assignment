import React from "react";

export default function Hero() {
    return (
        <>
            <section className="flex flex-col lg:flex-row absolute inset-0 -z-50">
                {/* left */}
                <div className="w-screen h-screen lg:w-1/2 bg-black2 px-8 lg:px-20 flex flex-col justify-center">

                        <h1 className="uppercase font-bold text-5xl lg:text-9xl text-black">
                            hero
                        </h1>
                        <h3 className="text-white mt-5 text-2xl lg:text-4xl">
                            Recruit with ease. Recruit with{" "}
                            <span className="text-accent-400 underline underline-offset-8">
                                RecruitEase
                            </span>
                            .
                        </h3>
                        <p className="text-white mt-8 text-base lg:text-2xl">
                            Are you tired of the tedious and time-consuming
                            hiring process? Are you struggling to find the
                            perfect candidates for your organization? Look no
                            further! RecruitEase is here to revolutionize the
                            way you recruit talent, making hiring a breeze for
                            hiring managers and HR professionals like you.
                        </p>
                        <button className="bg-accent-500 relative hover:bg-accent-500/75 text-2xl text-white  mt-8 py-2.5 lg:py-3.5">
                            Get Started
                        </button>
                </div>
                {/* right */}
                <div className="hidden lg:block w-1/2 bg-black h-screen relative">

                    <div className="peer group absolute m-auto inset-0 w-80 hover:w-96 h-80 hover:h-96 rounded-full bg-accent-500 z-10 ease-in-out duration-300">
                        <div className="absolute bg-accent-400 w-48 group-hover:w-40 h-48 group-hover:h-40 ease-in-out duration-300 inset-x-52 inset-y-52 rounded-full"></div>
                        <div className="absolute bg-accent-400 w-48 group-hover:w-40 h-48 group-hover:h-40 ease-in-out duration-300 inset-x-52 inset-y-52 rounded-full blur-xl"></div>
                    </div>
                    <div className="absolute m-auto inset-0 w-80 peer-hover:w-96 h-80 peer-hover:h-96 rounded-full bg-accent-500 blur-xl peer-hover:blur-xl z-0 ease-in-out duration-300"></div>
                </div>
            </section>
        </>
    );
}

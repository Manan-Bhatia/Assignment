import React from "react";

export default function Hero() {
    return (
        <section className="flex">
            <div className="w-1/2 font-inter">
                <div className="m-20">
                    <h1 className="uppercase font-semibold text-9xl text-black">
                        hero
                    </h1>
                    <h3 className="text-white mt-5 text-4xl">
                        Recruit with ease. Recruit with{" "}
                        <span className="text-accent-400">RecruitEase</span>.
                    </h3>
                    <p className="text-white mt-8 text-2xl">
                        Are you tired of the tedious and time-consuming hiring
                        process? Are you struggling to find the perfect
                        candidates for your organization? Look no further!
                        RecruitEase is here to revolutionize the way you recruit
                        talent, making hiring a breeze for hiring managers and
                        HR professionals like you.
                    </p>
                    <button className="bg-accent-500 text-2xl text-white  mt-8 px-7 py-3.5">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="w-1/2 relative">
                <div className="peer absolute m-auto inset-0 w-80 hover:w-96 h-80 hover:h-96 rounded-full bg-accent-500 z-10 ease-in-out duration-300"></div>
                <div className="absolute m-auto inset-0 w-80 peer-hover:w-96 h-80 peer-hover:h-96 rounded-full bg-accent-500 blur-xl peer-hover:blur-xl z-0 ease-in-out duration-300"></div>
            </div>
        </section>
    );
}

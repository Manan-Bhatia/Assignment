import React from "react";

export default function About() {
    return (
        <>
            <section className="flex flex-col md:flex-row -z-50">
                {/* Left */}
                <div className="w-full md:w-1/2 min-h-screen max-h-full">
                    {/* upper */}
                    <div className="bg-black h-3/5 px-8 md:px-20 py-16 md:py-10 flex flex-col md:justify-end">
                        <h1
                            id="about"
                            className="uppercase font-bold text-5xl md:text-8xl text-black2"
                        >
                            About
                        </h1>
                        <div>
                            <h3 className="text-white text-2xl md:text-4xl mt-5 inline-block border-b-accent-500 border-b-4">
                                Efficiency Unleashed
                            </h3>
                        </div>
                        <p className="text-white text-base md:text-2xl mt-6">
                            Our online recruitment solution is meticulously
                            designed to streamline your hiring process. Say
                            goodbye to stacks of resumes and endless interviews.
                            With RecruitEase, you'll be able to manage all your
                            candidates efficiently through a single,
                            user-friendly platform.
                        </p>
                    </div>
                    {/* lower */}
                    <div className="bg-black2 h-2/5 px-8 md:px-20 py-0 md:py-10">
                        <h3 className="text-white text-2xl md:text-4xl mt-5 inline-block border-b-accent-500 border-b-4">
                            Smart Candidate Matching
                        </h3>
                        <p className="text-white text-base md:text-2xl mt-6">
                            Our cutting-edge AI-powered algorithm takes the
                            guesswork out of finding the ideal candidates.
                            RecruitEase intelligently matches job requirements
                            with candidate qualifications, saving you valuable
                            time and ensuring you always find the best fit for
                            your team.
                        </p>
                    </div>
                </div>
                {/* Right */}
                <div className="w-full md:w-1/2 min-h-screen max-h-full">
                    {/* upper */}
                    <div className="bg-black md:bg-black2 h-1/2 md:h-3/5 px-8 md:px-20  py-0 md:py-10 md:flex flex-col justify-end">
                        <div>
                            <h3 className="text-white text-2xl md:text-4xl mt-5 inline-block border-b-accent-500 border-b-4">
                                Seamless Collaboration
                            </h3>
                        </div>
                        <p className="text-white text-base md:text-2xl mt-6">
                            Collaboration between hiring managers and HR
                            professionals has never been easier. With
                            RecruitEase, you can share notes, evaluations, and
                            feedback in real-time, ensuring everyone is on the
                            same page throughout the hiring process.
                        </p>
                    </div>
                    {/* lower */}
                    <div className="bg-black2 md:bg-black h-1/2 md:h-2/5 px-8 md:px-20 py-3 md:py-10">
                        <h3 className="text-white text-2xl md:text-4xl mt-5 inline-block border-b-accent-500 border-b-4">
                            Top-Notch Security
                        </h3>
                        <p className="text-white text-base md:text-2xl mt-6">
                            We understand the importance of safeguarding your
                            data and maintaining confidentiality. Rest assured,
                            RecruitEase employs robust security measures, so
                            your information remains safe from any prying eyes.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

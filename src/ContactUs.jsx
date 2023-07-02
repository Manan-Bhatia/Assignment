import React from "react";

export default function ContactUs() {
    return (
        <section className="flex -z-50">
            <div className="w-screen h-screen">
                <div className="bg-black h-full px-8 md:px-20 flex flex-col justify-center">
                    <h1
                        id="contact"
                        className="text-center uppercase font-bold text-4xl md:text-8xl text-black2"
                    >
                        Contact Us
                    </h1>
                    <h3 className="text-white text-center text-2xl md:text-4xl mt-5">
                        Fill in the details and we'll get back to you soon!
                    </h3>
                    <form action="#" className="mt-5 md:mt-10">
                        <input
                            id="name"
                            type="text"
                            placeholder="Full Name"
                            required
                            className="mb-5 md:mb-10 text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                        />
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="mb-5 md:mb-10 text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                        />
                        <textarea
                            id="message"
                            placeholder="Your message here..."
                            required
                            className="mb-5 md:mb-10 text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                        />
                        <div className="flex justify-center">
                            <button className="bg-accent-500 hover:bg-accent-500/75 font-normal md:font-bold text-2xl text-white  mt-0 md:mt-8 px-7 py-2.5 md:py-3.5">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

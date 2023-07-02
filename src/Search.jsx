import React, { useEffect, useState } from "react";

const users = [
    {
        id: 1,
        name: "John Doe",
        location: "New York",
        jobRole: "Software Engineer",
    },
    {
        id: 2,
        name: "Jane Smith",
        location: "San Francisco",
        jobRole: "Frontend Developer",
    },
    {
        id: 3,
        name: "John Johnson",
        location: "Seattle",
        jobRole: "Backend Developer",
    },
    {
        id: 4,
        name: "Jane Johnson",
        location: "Los Angeles",
        jobRole: "UI/UX Designer",
    },
    {
        id: 5,
        name: "Alice Williams",
        location: "Chicago",
        jobRole: "Data Analyst",
    },
    {
        id: 6,
        name: "Emily Davis",
        location: "Boston",
        jobRole: "Product Manager",
    },
    {
        id: 7,
        name: "John Doe",
        location: "New York",
        jobRole: "Software Engineer",
    },
    {
        id: 8,
        name: "Tom Smith",
        location: "San Francisco",
        jobRole: "Frontend Developer",
    },
    {
        id: 9,
        name: "Alice Johnson",
        location: "Los Angeles",
        jobRole: "UI/UX Designer",
    },
    {
        id: 10,
        name: "Bob Williams",
        location: "Chicago",
        jobRole: "Data Analyst",
    },
];

export default function Search() {
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(users);


    useEffect(() => {
        const filteredUsers = users.filter(
            (user) =>
                user.location.toLowerCase().includes(location.toLowerCase()) &&
                user.jobRole.toLowerCase().includes(jobRole.toLowerCase()) &&
                user.name.toLowerCase().includes(name.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
    }, [location, jobRole, name]);


    return (
        <section className="flex -z-50">
            <div className="bg-black font-inter w-screen min-h-screen max-h-full px-8 py-40 md:px-20">
                <div className="flex items-center gap-5">
                    <div>
                        <input
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className=" text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Location"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className=" text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Job Role"
                            type="text"
                            value={jobRole}
                            onChange={(e) => setJobRole(e.target.value)}
                            className=" text-white px-7 text-base md:text-2xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full py-2 md:py-3 bg-transparent border-4 border-black2"
                        />
                    </div>
                </div>
                <hr className="border-2 my-5" />
                {/* Display the filtered users */}
                <ul className="peer/ul text-white flex flex-col gap-5">
                    {filteredUsers.map((user) => (
                        <li key={user.id} className="border">
                            {user.name} <br /> {user.jobRole} - {user.location}
                        </li>
                    ))}
                </ul>
                <span className="hidden peer-empty/ul:block text-white">
                    No users found!
                </span>
            </div>
        </section>
    );
}

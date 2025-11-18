import React, { use } from "react";

const ApplicationList = ({ myApplicationPromise }) => {
    const applications = use(myApplicationPromise);

    return (
        <div className="overflow-x-auto min-h-[70px] mt-8">
            <table className="table w-full">
                <thead>
                    <tr className="bg-gray-200 text-left text-sm md:text-base">
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">Skills</th>
                        <th className="p-2">GitHub</th>
                        <th className="p-2">LinkedIn</th>
                        <th className="p-2">Portfolio</th>
                        <th className="p-2">Resume</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map(
                        ({ _id, name, applicant, phone, skills, github, linkedin, portfolio, resume }) => (
                            <tr key={_id} className="hover:bg-gray-100 text-sm md:text-base">
                                <td className="p-2">{name}</td>
                                <td className="p-2">{applicant}</td>
                                <td className="p-2">{phone}</td>
                                <td className="p-2 max-w-xs">{skills}</td>
                                <td className="p-2">
                                    <a href={github} target="_blank" className="text-blue-500 text-sm md:text-base">
                                        GitHub
                                    </a>
                                </td>
                                <td className="p-2">
                                    <a href={linkedin} target="_blank" className="text-blue-500 text-sm md:text-base">
                                        LinkedIn
                                    </a>
                                </td>
                                <td className="p-2">
                                    <a href={portfolio} target="_blank" className="text-blue-500 text-sm md:text-base">
                                        Portfolio
                                    </a>
                                </td>
                                <td className="p-2">
                                    <a href={resume} target="_blank" className="text-blue-500 text-sm md:text-base">
                                        Resume
                                    </a>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationList;
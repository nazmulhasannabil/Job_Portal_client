import React, { use } from "react";

const ApplicationList = ({ myApplicationPromise }) => {
    const applications = use(myApplicationPromise);

    return (
        <div className="overflow-x-auto min-h-70">
            <table className="table w-full">
                <thead>
                    <tr className="bg-gray-200 text-left">
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
                            <tr key={_id} className="hover:bg-gray-100">
                                <td className="p-2">{name}</td>
                                <td className="p-2">{applicant}</td>
                                <td className="p-2">{phone}</td>
                                <td className="p-2">{skills}</td>
                                <td className="p-2">
                                    <a href={github} target="_blank" className="text-blue-500">
                                        GitHub
                                    </a>
                                </td>
                                <td className="p-2">
                                    <a href={linkedin} target="_blank" className="text-blue-500">
                                        LinkedIn
                                    </a>
                                </td>
                                <td className="p-2">
                                    <a href={portfolio} target="_blank" className="text-blue-500">
                                        Portfolio
                                    </a>
                                </td>
                                <td className="p-2">
                                    <a href={resume} target="_blank" className="text-blue-500">
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

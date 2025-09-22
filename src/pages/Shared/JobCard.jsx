import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";


const JobCard = ({ job }) => {
    const {
        title,
        _id,
        location,
        jobType,
        description,
        company,
        requirements,
        company_logo,
    } = job;

    return (
        <div className="group bg-teal-500/20 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-200">

            <div className="p-4 mb-4 items-center">
                <div className="flex bg-teal-500/50 border border-gray-200 rounded-lg pt-4 pb-4">
                    <div className=" ">
                        <img
                            src={company_logo}
                            alt={`${company} logo`}
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <div className="ml-4">
                        <h2>{company}</h2>
                        <p className="flex items-center gap-2"><FaMapMarkerAlt />{location}</p>
                    </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>

                <p className="text-sm text-gray-600 mb-3">
                    🕒 <span className="font-medium">{jobType}</span>
                </p>

                <p className="text-sm text-gray-700 mb-4">{description}</p>



                <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">✅ Requirements:</p>
                    <ul className="flex flex-wrap gap-2">
                        {requirements.map((req, index) => (
                            <div className="badge badge-outline group-hover:text-white group-hover:bg-teal-500/50 gap-4" key={index}>{req}</div>
                        ))}
                    </ul>
                </div>
                <div className="pt-4 mt-4">
                    <Link to={`/jobs/${_id}`}><button className="group-hover:animate-pulse btn text-white bg-teal-500 ">Learn More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;

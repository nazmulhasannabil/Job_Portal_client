import { FaMapMarkerAlt, FaDollarSign, FaClock, FaCheckCircle } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  // ✅ Destructure safely with defaults
  const {
    _id,
    title,
    company,
    location,
    salaryRange,
    jobType,
    description,
    requirements = [], // fallback empty array
    benefits = [] // fallback empty array
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white shadow-lg rounded-2xl mt-4 md:mt-8">
      {/* Header */}
      <div className="border-b pb-4 mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-lg text-teal-600 font-semibold">{company}</p>
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 text-sm md:text-base text-gray-600">
          <span className="flex items-center gap-1 md:gap-2">
            <FaMapMarkerAlt className="text-teal-500 text-sm md:text-base" /> {location}
          </span>
          <span className="flex items-center gap-1 md:gap-2">
            <FaDollarSign className="text-teal-500 text-sm md:text-base" /> {salaryRange.min}-{salaryRange.max} BDT
          </span>
          <span className="flex items-center gap-1 md:gap-2">
            <FaClock className="text-teal-500 text-sm md:text-base" /> {jobType}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4 md:mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>

      {/* Requirements */}
      {requirements.length > 0 && (
        <div className="mb-4 md:mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
          <ul className="list-none space-y-2">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                <FaCheckCircle className="text-teal-500 text-sm md:text-base" /> {req}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Benefits */}
      {benefits.length > 0 && (
        <div className="mb-4 md:mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Apply Section */}
      <div className="pt-4 border-t">
        <Link to={`/jobApply/${_id}`}>
        <div className="w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-2 md:py-3 rounded-xl text-base md:text-lg font-semibold cursor-pointer transition">
          Apply Now
        </div>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
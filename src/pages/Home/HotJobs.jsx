'use client'; // Needed in Next.js App Router for client components

import React, { useState, useEffect } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('https://job-portal-server-2-re3d.onrender.com/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="px-4 py-8 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
        🔥 Hot Jobs of the Day 🔥
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading jobs...</p>
      ) : (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              jobs.map(job => <JobCard key={job._id} job={job} />)
            }
          </div>
        </>

      )}
    </div>
  );
};

export default HotJobs;

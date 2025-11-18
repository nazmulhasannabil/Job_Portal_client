import { MdPerson, MdEmail, MdPhone, MdUploadFile, MdWorkOutline } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { div } from 'motion/react-client';
import { useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ITJobApplicationForm() {

    const params = useParams();
    const { user } = UseAuth();
    const { id, } = params;

    const handleApplicationSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const skills = form.skills.value;
        const portfolio = form.portfolio.value;
        const resume = form.resume.value;
        const github = form.github.value;
        const linkedin = form.linkedin.value;

        const application = {
            id,
            applicant: user.email,
            name,
            phone,
            skills,
            portfolio,
            resume,
            github,
            linkedin
        }

        axios.post('https://job-portal-server-2-re3d.onrender.com/applications', application)
            .then(res => {
                console.log(res.data)
                let timerInterval;
                Swal.fire({
                    title: "Submitted Successfully!",
                    // html: "I will close in <b></b> milliseconds.",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer:Swal");
                    }
                });
            })
            .catch(error => {
                console.log(error);
            })


    }


    return (
        <div className='min-h-screen py-8'>

            <div className="max-w-4xl mx-auto p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-teal-500 mb-4 flex items-center gap-2">
                    <FaTools className="text-teal-500" />
                    IT Job Application Form
                </h2>

                <form
                    onSubmit={handleApplicationSubmit}
                    className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-teal-500 font-medium mb-1 flex items-center gap-1 text-sm md:text-base">
                            <MdPerson /> Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-teal-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm md:text-base"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-teal-500 font-medium mb-1 flex items-center gap-1 text-sm md:text-base">
                            <MdEmail /> Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-teal-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm md:text-base"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-teal-500 font-medium mb-1 flex items-center gap-1 text-sm md:text-base">
                            <MdPhone /> Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-teal-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm md:text-base"
                        />
                    </div>

                    {/* Skills */}
                    <div>
                        <label htmlFor="skills" className="block text-teal-500 font-medium mb-1 flex items-center gap-1 text-sm md:text-base">
                            <FaTools /> Technical Skills
                        </label>
                        <textarea
                            id="skills"
                            name="skills"
                            rows="4"
                            placeholder="List your relevant IT skills..."
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-teal-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm md:text-base"
                        />
                    </div>


                    {/* Portfolio */}
                    <div>
                        <label htmlFor="portfolio" className="block text-teal-500 font-medium mb-1 flex items-center gap-1 text-sm md:text-base">
                            <MdWorkOutline /> Portfolio Link
                        </label>
                        <input
                            type="url"
                            id="portfolio"
                            name="portfolio"
                            placeholder="Your portfolio or personal website link..."
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-teal-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm md:text-base"
                        />
                    </div>
                    {/* Github link  */}
                    <div>
                        <label htmlFor="Github" className="block text-teal-500 font-medium mb-1 flex items-center gap-1 text-sm md:text-base">
                            <MdWorkOutline /> GitHub Link
                        </label>
                        <input
                            type="url"
                            id="github"
                            name="github"
                            placeholder="Your GitHub profile link..."
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-teal-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm md:text-base"
                        />
                    </div>
                    {/* Github link  */}
                    <div>
                        <label htmlFor="Linkedin" className="block text-teal-500 font-medium mb-1 flex items-center gap-1 text-sm md:text-base">
                            <MdWorkOutline /> Linkedin Link
                        </label>
                        <input
                            type="url"
                            id="linkedin"
                            name="linkedin"
                            placeholder="Your linkedin profile link..."
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-teal-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm md:text-base"
                        />
                    </div>


                    {/* Resume link */}
                    <div>
                        <label htmlFor="resume" className="block text-teal-500 font-medium mb-1 flex items-center gap-1 text-sm md:text-base">
                            <MdUploadFile /> Upload Resume
                        </label>
                        <input
                            type="url"
                            id="resume"
                            name="resume"
                            placeholder="Your resume link..."
                            className="w-full px-3 py-2 md:px-4 md:py-2 border border-teal-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm md:text-base"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            <FaTools /> Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
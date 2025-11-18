import { motion } from 'motion/react'
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[60vh] py-8 md:py-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-16">
                <div className="flex-1 flex flex-col items-center lg:items-start">
                    {/* First Image */}
                    <motion.img
                        src={team1}
                        alt="Team"
                        className="max-w-[200px] md:max-w-sm rounded-[20px] md:rounded-[40px] border-s-4 md:border-s-6 border-b-4 md:border-b-6 border-blue-500 shadow-2xl relative mb-4"
                        
                        animate={{ y: [20, 40, 20] }}
                        transition={{ duration: 8, repeat: Infinity }}
                       
                    />

                    {/* Second Image - overlaps slightly to the right */}
                    <motion.img
                        src={team2}
                        alt="Team"
                        className="max-w-[200px] md:max-w-sm rounded-[20px] md:rounded-[40px] border-s-4 md:border-s-6 border-b-4 md:border-b-6 border-blue-500 shadow-2xl -ml-12 md:-ml-24 -mt-12 md:-mt-24"
                        animate={{ x: [100, 125, 100] }}
                        transition={{ duration: 8, delay: 2, repeat: Infinity }}
                       
                    />
                </div>


                <div className="flex-1 text-center lg:text-left">
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Find Your{" "}
                        <motion.span
                            initial={{ color: "#ef4444" }} // red-500
                            animate={{ color: "#3b82f6" }} // blue-500
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        >
                            Job News!
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="py-4 md:py-6 text-sm md:text-base"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </motion.p>

                    <motion.button
                        className="btn btn-primary px-4 py-2 md:px-6 md:py-3 text-sm md:text-base"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.button>
                </div>

            </div>
        </div>
    )
}

export default Banner
import { motion } from 'motion/react'
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-60vh">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1 flex-col">
                    {/* First Image */}
                    <motion.img
                        src={team1}
                        alt="Team"
                        className="max-w-sm rounded-[40px] border-s-6 border-b-6 border-blue-500 shadow-2xl relative "
                        
                        animate={{ y: [50,100,50] }}
                        transition={{ duration: 8,repeat: Infinity }}
                       
                    />

                    {/* Second Image - overlaps slightly to the right */}
                    <motion.img
                        src={team2}
                        alt="Team"
                        className="max-w-sm rounded-[40px] border-s-6 border-b-6 border-blue-500 shadow-2xl -ml-24" // negative margin to overlap
                        animate={{ x: [200,250,200] }}
                        transition={{ duration: 8,delay:2, repeat: Infinity }}
                       
                    />
                </div>


                <div className="flex-1">
                    <motion.h1
                        className="text-5xl font-bold"
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
                        className="py-6"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </motion.p>

                    <motion.button
                        className="btn btn-primary"
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
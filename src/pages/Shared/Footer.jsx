import React from 'react'
import { FaMapSigns, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-teal-600 to-teal-800 text-white pb-10 pt-10 px-4 md:px-[8%]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <aside className="mb-6 md:mb-0 md:w-1/4">
                    <FaMapSigns size={40} className="md:size-60 text-teal-200" />

                    <p className="text-sm md:text-base mt-2">
                        Job Map Industries Ltd.
                        <br />
                        Providing reliable Job since 1992
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-teal-200 hover:text-white transition-colors">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="text-teal-200 hover:text-white transition-colors">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-teal-200 hover:text-white transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" className="text-teal-200 hover:text-white transition-colors">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </aside>
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full md:w-3/4">
                    <nav className="mb-6 md:mb-0">
                        <h6 className="footer-title text-sm md:text-base font-bold text-teal-200 mb-2">Services</h6>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Branding</a>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Design</a>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Marketing</a>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Advertisement</a>
                    </nav>
                    <nav className="mb-6 md:mb-0">
                        <h6 className="footer-title text-sm md:text-base font-bold text-teal-200 mb-2">Company</h6>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">About us</a>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Contact</a>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Jobs</a>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-sm md:text-base font-bold text-teal-200 mb-2">Legal</h6>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Terms of use</a>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Privacy policy</a>
                        <a className="link link-hover text-sm md:text-base block py-1 hover:text-teal-200 transition-colors">Cookie policy</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
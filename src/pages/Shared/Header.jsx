import React, { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../../contexts/authContext/AuthContext'

const Header = () => {
    const {user, signOutUser} = use(AuthContext)

    const handleSignOut = () => {
        signOutUser()
        .then(()=>{
            console.log('User signed out')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const links = <>
        <li className="py-2 md:py-0"><Link to="/">Home</Link></li>
        {
            user && <>
            <li className="py-2 md:py-0"><Link to="/myapplications">My Application</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-teal-500 shadow-sm px-4 md:px-[8%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href='/' className="text-2xl md:text-4xl font-bold text-gray-700">Job Map</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                user ? 
                <button onClick={handleSignOut} className='px-3 py-2 md:px-4 md:py-2 bg-teal-700 rounded-lg text-sm md:text-base'>
                    Log out
                </button>
                : <>
                    <Link to="/register" className="px-3 py-2 md:px-4 md:py-2 hover:underline bg-teal-600 rounded-lg text-sm md:text-base mr-2">Register</Link>
                    <Link to="/signin" className="px-3 py-2 md:px-4 md:py-2 bg-teal-600 rounded-lg text-sm md:text-base">Sign in</Link>
                </>
                }
            </div>
        </div>
    )
}

export default Header
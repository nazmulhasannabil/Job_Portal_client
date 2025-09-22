import React, { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../../contexts/authContext/AuthContext';

const Header = () => {
    const {user, signOutUser} = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(()=>{
            console.log('User signed out');
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const links = <>
        <li><Link to="/">Home</Link></li>
        {
            user && <>
            <li><Link to="/myapplications">My Application</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-teal-500 shadow-sm px-[8%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href='/' className="text-4xl font-bold text-gray-700">Job Map</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                user ? <Link to='/'><button onClick={handleSignOut} className='px-4 py-2 bg-teal-700'>Log out</button></Link>
                : <>
                    <Link to="/register" className="px-4 py-2 hover:underline bg-teal-600">Register</Link>
                    <Link to="/signIn" className="px-4 py-2 bg-teal-600">Sign in</Link>
                </>
                }
            </div>
        </div>
    )
}

export default Header
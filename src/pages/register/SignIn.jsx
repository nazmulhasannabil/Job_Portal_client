import SignInLotties from '../../assets/lotties/Signin.json'
import Lottie from "lottie-react";
import { AuthContext } from '../../contexts/authContext/AuthContext';
import { use } from 'react';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {
    const { signInUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';
    
    console.log(location);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        //Sign in User
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from)
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen py-8">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                <div className="text-center lg:text-left">
                    <Lottie animationData={SignInLotties} loop={true} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl md:text-5xl font-bold text-center">Sign in now!</h1>
                        <SocialLogin from = {from} />
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset space-y-4">
                                <div>
                                    <label className="label text-sm md:text-base">Email</label>
                                    <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" />
                                </div>
                                <div>
                                    <label className="label text-sm md:text-base">Password</label>
                                    <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" />
                                </div>
                                <div><a className="link link-hover text-sm md:text-base">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4 w-full">Sign in</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
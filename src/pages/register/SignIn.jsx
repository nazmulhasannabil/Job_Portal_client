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
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie animationData={SignInLotties} loop={true} style={{ width: 400, height: 400 }} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign in now!</h1>
                        <SocialLogin from = {from} />
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign in</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
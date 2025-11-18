import registerLotties from '../../assets/lotties/register.json'
import Lottie from "lottie-react";
import { AuthContext } from '../../contexts/authContext/AuthContext';
import { use } from 'react';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {
    const { createUser } = use(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
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
                    <Lottie animationData={registerLotties} loop={true} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl md:text-5xl font-bold text-center">Register now!</h1>
                        <SocialLogin />
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset space-y-4">
                                <div>
                                    <label className="label text-sm md:text-base">Email</label>
                                    <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" />
                                </div>
                                <div>
                                    <label className="label text-sm md:text-base">Password</label>
                                    <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" />
                                </div>
                                <button className="btn btn-neutral mt-4 w-full">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
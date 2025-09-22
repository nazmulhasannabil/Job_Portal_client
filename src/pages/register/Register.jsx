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
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie animationData={registerLotties} loop={true} style={{ width: 400, height: 400 }} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <SocialLogin />
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
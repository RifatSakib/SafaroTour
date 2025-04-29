import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import AOS from 'aos';
import 'aos/dist/aos.css';

import logo from "../../assets/mountain.png";

// Initialize AOS animations
AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            });
    }

    return (
        <>
            <Helmet>
                <title>Safora | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200 pt-20">
                <div className="hero-content flex justify-center w-full">

                    <div data-aos="flip-left" data-aos-duration="3000" className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        
                        
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <div className="mx-auto text-center mb-4">
                                    <img src={logo} alt="Logo" className="w-16 h-16 mx-auto" />
                                    <p className="text-yellow-400 text-xl font-bold">Safaro</p>
                                </div>

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered"
                                    required
                                />

                                <label className="label justify-end">
                                    <a href="#" className="text-blue-600 hover:underline text-sm">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input
                                    disabled={false}
                                    className="btn btn-warning"
                                    type="submit"
                                    value="Login"
                                />
                            </div>

                            <div className="form-control mt-4">
                                <Link to="/signup">
                                    <button disabled={false} className="btn btn-outline w-full">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </form>

                        {/* Social login section */}
                        <div className="px-6 pb-6">
                            <SocialLogin />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;

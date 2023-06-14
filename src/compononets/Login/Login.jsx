import React, { useContext, useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [show, setShow] = useState(false)

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';
    

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        setSuccess('');
        if(password.length > 6){
            setError('password must be 6 characters or longer')
        }

        signIn(email, password)
        .then(result => {
            const logInUser = result.user;
            console.log(logInUser);
            setSuccess('Successfully Logged in')
            navigate(from, {replace: true})
        })
        .catch(error =>{
            setError(error.message);
            console.log(error);
        })
        form.reset();
    }
    return (
        <div className='form-box mt-8'>
            <div className='form-container flex justify-center'>
                <div>
                    <h2 className='Login-title'>LogIn</h2>
                </div>
                <div>
                    <form onSubmit={handleSignIn}>
                        <div>
                            <label className='' htmlFor="email">Email:</label> <br />
                            <input
                                className='input-filed '
                                type="email"
                                id="email"
                                name='email'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <br />
                            <input
                                className='input-filed'
                                type={show?'text':'password'}
                                id="password"
                                name='password'
                                required
                            />
                            {/* Show or Hide password */}
                            <p className='show-pass' onClick={() => setShow(!show)}><small>
                                {
                                    show? <span>Hide Password</span>: <span>Show Password</span>
                                }
                                </small></p>

                            <p className='login-error'>{error}</p>
                        </div>
                        <div className='sign-in-btn'>
                            <button className='submit' type="submit">Login</button>
                            <p className=''>New to Ema-jon? <Link  to = '/sign-up'>Create New Account</Link></p>
                        </div>

                        <div>

                            <button className='google-submit' type="submit"> <span><img className='' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" /></span>
                                <span className='google-btn-text'>Continue with Google</span>
                            </button>
                            <p className='success-msg'>{success}</p>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Login;
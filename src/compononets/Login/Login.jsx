import React from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <div className='form-box mt-8'>
            <div className='form-container flex justify-center'>
                <div>
                    <h2 className='Login-title'>LogIn</h2>
                </div>
                <div>
                    <form >
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
                                type="password"
                                id="password"
                                name='password'
                                required
                            />
                        </div>
                        <div>
                            <button className='submit' type="submit">Login</button>
                        </div>

                        <div>

                            <button className='google-submit' type="submit"> <span><img className='' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" /></span>
                                <span className='google-btn-text'>Continue with Google</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Login;
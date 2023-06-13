import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-box mt-8'>
            <div className='form-container flex justify-center'>
                <div>
                    <h2 className='Login-title'>SignUp</h2>
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
                            <label htmlFor="password">Confirm Password:</label>
                            <br />
                            <input
                                className='input-filed'
                                type="password"
                                id="password"
                                name='confirm'
                                required
                            />
                        </div>
                        <div>
                            <button className='submit' type="submit">Login</button>
                        </div>

                    </form>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default SignUp;
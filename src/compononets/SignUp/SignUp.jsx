import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');

    const {creatUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(email, password, confirmPassword);

        setError('');
        if(password !== confirmPassword){
            setError('Your password did not match')
            return
        }
        else if(password.length< 6){
            setError('password must be 6 characters or longer')
        }
        creatUser(email, password)
        .then (result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            setError(error.message)
            console.log(error);
        })


        form.reset();
    }

    return (
        <div className='form-box mt-8'>
            <form onSubmit={handleSignUp} className='form-container flex justify-center'>
                <div>
                    <h2 className='Login-title'>SignUp</h2>
                </div>
                <div>
                    <div>
                        <label className='' htmlFor="email">Email:</label> <br />
                        <input
                            className='input-filed'
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
                        <p className='error'>{error}</p>
                    </div>
                    <div>
                        <label htmlFor="confirm">Confirm Password:</label>
                        <br />
                        <input
                            className='input-filed'
                            type="password"
                            id="confirm"
                            name='confirm'
                            required
                        />
                        <p className='error'>{error}</p>
                    </div>
                    <div className='sign-in-btn'>
                    <button  type="submit">Sign up</button>
                        <p className=''>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
                <div></div>
            </form>
        </div>
    );
};

export default SignUp;

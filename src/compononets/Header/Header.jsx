import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user,logOut,signIn } = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then(() =>{
            console.log('Log Out');
        })
        .catch(error =>{
            console.log(error);
        })
    }
  

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">Sign Up</Link>
                {user && <span>Welcome! <span>{user.email} <button onClick={handleSignOut} className='sign-out'>Sign Out</button></span></span>}
                
            </div>
            
        </nav>
    );
};

export default Header;
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Log Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
      </div>


      <div>
        {/* Check if 'user' is defined */}
        {user ? (
          // If 'user' is defined, show the 'FaUser' icon and 'Sign Out' button
          <span className="user">
            <FaUser></FaUser>
          </span>
        ) : (
          // If 'user' is not defined, show the 'Login' button
          <div>
            <Link className="login-btn" to="/login"><button>Login</button></Link>
          <Link to="/sign-up"><button>Sign Up</button></Link>
          </div>
        )}

        {/* Always show the 'Sign Out' button (conditionally rendered) */}
        {user && (
          <span>
            <button onClick={handleSignOut} className="sign-out text-white">
              Sign Out
            </button>
          </span>
        )}
      </div>


    </nav>
  );
};

export default Header;

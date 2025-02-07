import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png'; // Path to the logo image
import { FaHamburger} from 'react-icons/fa';
import {  FaX } from 'react-icons/fa6';

const Header = ({ user, signOut }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="header">
      <div className='dh'>
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
        <span className="header-text">LCU Events</span>
      </div>
      <div onClick={toggleNav}>
      <FaHamburger className='hamburger' size={42} color='white'/>
      </div>
      </div>
      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <div className='hamburger ghg' onClick={toggleNav}>
          <FaX size={32} color={"black"}/>
        </div>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/all-events" className="nav-link">Events</Link></li>
        <li><Link to="/find-events" className="nav-link">Find Events</Link></li>

        {user ? (
          <>
            <li><Link to="/dashboard" className="button head-dashboard">Dashboard</Link></li>
            <li><Link onClick={signOut} className="button head-logout">Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="button login">Login</Link></li>
            <li><Link to="/signup" className="button signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

// Prop validation
Header.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func.isRequired,
};

export default Header;

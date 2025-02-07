// This component will be used to display the header of the application.
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png'; // Path to the logo image
// eslint-disable-next-line react/prop-types
const Header = ({user, signOut}) => {
  return (
    <nav className="header">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
        <span className="header-text">LCU Events</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/all-events" className="nav-link">Events</Link></li>
        <li><Link to="/find-events" className="nav-link">Find Events</Link></li>
        {/* {
          user && (
            <>
             <li><Link to="/login" className="button login">Login</Link></li>
             <li><Link to="/signup" className="button signup">Signup</Link></li>
            </>
          )
        } */}
        {user ? (
          // If user is logged in, show the Dashboard button
          <>
          <li><Link to="/dashboard" className="button head-dashboard">Dashboard</Link></li>
          <li><Link onClick={signOut} className="button head-logout">Logout</Link></li>
          </>
        ) : (
          // If user is not logged in, show Login and Signup buttons
          <>
            <li><Link to="/login" className="button login">Login</Link></li>
            <li><Link to="/signup" className="button signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}


export default Header

import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/dashboard/my-events">My Events</Link></li>
        <li><Link to="/dashboard/interested-events">Interested Events</Link></li>
        <li><Link to="/dashboard/create-event">Create Event</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
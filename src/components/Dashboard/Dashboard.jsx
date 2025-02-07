import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import './Dashboard.css'; // Dashboard-specific styles

function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
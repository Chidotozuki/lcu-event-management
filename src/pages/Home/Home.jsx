import { Link } from "react-router-dom";
import Meta from "../../components/Meta"
import "./Home.css";

const Home = () => {
  return (
    <>
    <Meta title="Welcome - LCU Events" />
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to LCU Events</h1>
          <p>Your go-to platform for creating and discovering amazing events.</p>
          <Link to="/find-events" className="cta-button">
            Explore Events
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose LCU Events?</h2>
        <div className="feature-list">
          <div className="feature">
            <span className="icon">🎉</span>
            <h3>Create Events</h3>
            <p>Easily organize and manage your events.</p>
          </div>
          <div className="feature">
            <span className="icon">🔍</span>
            <h3>Discover Events</h3>
            <p>Find exciting events happening near you.</p>
          </div>
          <div className="feature">
            <span className="icon">📅</span>
            <h3>Manage Events</h3>
            <p>Keep track of your events and attendees.</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
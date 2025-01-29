// import React from "react";
// import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      {/* About Section */}
      <section className="about-section">
        <h1>About LCU Events</h1>
        <p>
          LCU Events is a platform designed to help you create, discover, and manage events with ease.
          Whether you&apos;re organizing a small gathering or a large conference, Eventify has you covered.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Sign Up</h3>
            <p>Create an account to get started.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Create an Event</h3>
            <p>Add details about your event and publish it.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Join Events</h3>
            <p>Discover and join events that interest you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
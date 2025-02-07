
function Home() {
  return (
    <div className="home">
      <h2>Upcoming Events</h2>
      <div className="event-cards">
        {/* Example Event Card */}
        <div className="event-card">
          <h3>Event Title</h3>
          <p>Date: October 30, 2023</p>
          <p>Location: Virtual</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
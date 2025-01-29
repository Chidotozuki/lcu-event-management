import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css"; // Import the CSS Module

const Dashboard = () => {
  const [events, setEvents] = useState([]); // Stores the list of user-created events
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    image: "",
  });

  // Fetch user-created events when the component mounts
  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const response = await fetch("/api/user/events"); // Replace with your API endpoint
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching user events:", error);
      }
    };

    fetchUserEvents();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Handle form submission to create a new event
  const handleCreateEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        const createdEvent = await response.json();
        setEvents([...events, createdEvent]); // Add the new event to the list
        setNewEvent({
          title: "",
          description: "",
          date: "",
          location: "",
          image: "",
        }); // Reset form
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className={styles.dashboard}>
      <h1>Your Dashboard</h1>

      {/* Create Event Form */}
      <div className={styles.createEventForm}>
        <h2>Create a New Event</h2>
        <form onSubmit={handleCreateEvent}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={newEvent.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Create Event</button>
        </form>
      </div>

      {/* User Events List */}
      <div className={styles.userEvents}>
        <h2>Your Events</h2>
        {events.length > 0 ? (
          <div className={styles.eventList}>
            {events.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <Link to={`/event/${event.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        ) : (
          <p>You haven&apos;t created any events yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
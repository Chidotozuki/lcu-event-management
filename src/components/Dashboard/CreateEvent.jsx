import { useState } from 'react';

function CreateEvent() {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', event);
    // ............
  };

  return (
    <div className="create-event">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
        <input
          type="date"
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={event.location}
          onChange={(e) => setEvent({ ...event, location: e.target.value })}
        />
        <textarea
          placeholder="Event Description"
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
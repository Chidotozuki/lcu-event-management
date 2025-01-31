import EventCard from "../../components/EventCard/EventCard.jsx";
import { eventList } from "../../utils/EventDatabase.jsx";
import Meta from "../../components/Meta.jsx";
import "./EventList.css";
const EventList = () => {
  const renderEventCards = () => {
    return eventList.map(({ id, date, heading, location, img,interestCount }) => {
      return (
        <>
          <Meta title="Events" />
          <EventCard
            key={id}
            id={id}
            date={date}
            heading={heading}
            location={location}
            img={img}
            interestCount={interestCount}
          />
        </>
      );
    });
  };
  return (
    <div>
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default EventList;

import { Link } from "react-router-dom";
import "./EventCard.css";
// import ShowInterest from "../ShowInterest/ShowInterest";
const EventCard = ({ id, heading, date, location, img, interestCount }) => {
  const { year, month } = date;

  return (
    <Link to={`/event/${id}`} style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="card-content">
          <h3>{heading}</h3>
          <p>
            <span>Year: {year}</span>
            <span>Month: {month}</span>
          </p>
          <p>{location}</p>
          {/* <div className="show-interest-container">
            <ShowInterest eventId={id} initialInterestCount={interestCount} />
          </div> */}
        </div>

        <div className="card-img-wrapper">
          <img src={img} alt="image not found" />
        </div>
        <div></div>
      </div>
    </Link>
  );
};

export default EventCard;

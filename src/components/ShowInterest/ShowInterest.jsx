import React, { useState } from 'react';
// import './ShowInterest.module.css';
const ShowInterest = ({ eventId, initialInterestCount }) => {
  const [interested, setInterested] = useState(false);
  const [interestCount, setInterestCount] = useState(initialInterestCount);

  const handleShowInterest = () => {
    if (!interested) {
      setInterestCount(interestCount + 1);
      setInterested(true);
    } else {
      setInterestCount(interestCount - 1);
      setInterested(false);
    }
  };

  return (
    <div>
      <button onClick={handleShowInterest} disabled={interested}>
        {interested ? 'Interested!' : 'Show Interest'}
      </button>
      <p>{interestCount} people interested</p>
    </div>
  );
};

export default ShowInterest;
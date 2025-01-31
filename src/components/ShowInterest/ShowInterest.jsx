import { useState } from "react";

const ShowInterest = ({ initialInterestCount }) => {
  const [hasShownInterest, setHasShownInterest] = useState(false);
  const [interestCount, setInterestCount] = useState(initialInterestCount);

  const handleShowInterest = () => {
    if (!hasShownInterest) {
      setHasShownInterest(true);
      setInterestCount((prev) => prev + 1);
    }
  };

  return (
    <button
      onClick={handleShowInterest}
      disabled={hasShownInterest}
      className={`show-interest-button ${hasShownInterest ? "disabled" : ""}`}
    >
      {hasShownInterest ? "Interested ✅" : "Show Interest"} 
      <span className="interest-count">({interestCount})</span>
    </button>
  );
};

export default ShowInterest;

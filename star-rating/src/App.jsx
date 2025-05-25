import StarRating from "./components/StarRating";
import { useState } from "react";

export default function App() {
  const [filledStars, setFilledStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0); // to retain memory of the last clicked star length

  const handleClick = (e) => {
    const index = parseInt(e.currentTarget.dataset.index);
    if (index === selectedStars) {
      // for resetting the stars to 0, if same star is clicked consecutively
      setFilledStars(0);
      setSelectedStars(0);
    } else {
      setFilledStars(index);
      setSelectedStars(index);
    }
  };

  const handleMouseHover = (e) => {
    const index = parseInt(e.currentTarget.dataset.index);
    setFilledStars(index);
  };

  const handleMouseLeave = () => {
    setFilledStars(selectedStars); // sets the last clicked star length to filledStars
  };
  return (
    <div>
      <StarRating
        totalStars={5}
        filledStars={filledStars}
        setFilledStars={setFilledStars}
        handleClick={handleClick}
        handleMouseHover={handleMouseHover}
        handleMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

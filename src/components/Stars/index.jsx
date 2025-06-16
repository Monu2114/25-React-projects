import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "../Stars/styles.css";
export default function Stars({ noOfStars = 5 }) {
  //   const [liked, setLike] = useState([]);
  //   const handleClick = (index) => {
  //     if (!liked.includes(index)) setLike([...liked, index]);
  //     else setLike(liked.filter((id) => id != index));
  //     console.log(liked);
  //   };

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(index) {
    setRating(index);
    console.log("Click", index);
  }
  function handleMouseEnter(index) {
    setHover(index);
    console.log("Enter", index);
  }
  function handleMouseLeave() {
    setHover(rating);
    console.log("Leave");
  }
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            className={index <= (hover || rating) ? "active" : "inactive"}
          />
        );
      })}
    </div>
  );
}

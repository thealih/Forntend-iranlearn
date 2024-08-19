import { useState } from "react";
import { useEffect } from "react";

const LandingCounter = ({ count =500}) => {
  const [courseCounter, setCourseCounter] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCourseCounter((prevCount) => prevCount + 1);
    }, 1);

    if (courseCounter === count) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [courseCounter]);
  return <span className="landing-status__count">{courseCounter}</span>;
};

export default LandingCounter;

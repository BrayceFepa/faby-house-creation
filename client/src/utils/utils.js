import React, { useEffect, useState } from "react";

const utils = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20); // you can then use the scroll state variable in your code
    });
  }, []);

  return <div>utils</div>;
};

export default utils;

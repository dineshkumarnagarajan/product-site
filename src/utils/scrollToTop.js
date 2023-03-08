import { useEffect } from "react";
//import { BrowserRouter } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  return children || null;
};

export default ScrollToTop;
import { useState, useEffect } from "react";
import Footer from "./RFooter";
import MFooter from "./MFooter";

const ScreenSizeFooter = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen ? <MFooter /> : <Footer />;
};

export default ScreenSizeFooter;

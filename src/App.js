import { Outlet } from "react-router-dom";

//css
import "./App.css";
//components
import Navbar from "./Navbar";
//Aos
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function for animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

import { useEffect } from "react";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    if (!window.location.hash) return;

    const animationFrameId = window.requestAnimationFrame(() => {
      document
        .getElementById(window.location.hash.slice(1))
        ?.scrollIntoView({ behavior: "instant", block: "start" });
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App

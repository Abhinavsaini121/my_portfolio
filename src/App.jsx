// App.jsx
import React, { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <SplashScreen /> : <Home />}</>;
}

export default App;
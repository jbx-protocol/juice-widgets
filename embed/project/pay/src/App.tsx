import { useEffect } from "react";
import { Card } from "./components/Card";

function App() {
  useEffect(() => {
    document.getElementById("root")?.classList.add("active");
  }, []);

  return (
    <div className="h-screen w-screen bg-opacity-60 bg-black flex items-center justify-center">
      <Card />
    </div>
  );
}

export default App;

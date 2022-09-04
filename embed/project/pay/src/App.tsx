import { useEffect } from "react";
import { Root } from "react-dom/client";
import { Card } from "./components/Card";

function App({ options, root }: { options: any; root: Root }) {
  useEffect(() => {
    document.getElementById("root")?.classList.add("active");
  }, []);

  return (
    <div className="h-screen w-screen bg-opacity-60 bg-black flex items-center justify-center">
      <Card options={options} root={root} />
    </div>
  );
}

export default App;

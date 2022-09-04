import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [options, setOptions] = useState();

  useEffect(() => {
    window.addEventListener(
      "message",
      (e) => {
        // TODO check host
        console.log("react::", e.data);
        if (e.data.method === "render") {
          const { options } = e.data;
          setOptions(options);

          document.getElementById("juicebox-pay")?.classList.add("active");
        }
      },
      false
    );
  }, []);

  return (
    <div className="h-screen w-screen bg-opacity-60 bg-black flex items-center justify-center">
      <Card options={options} />
    </div>
  );
}

export default App;

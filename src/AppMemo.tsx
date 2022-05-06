import { useState, memo } from "react";
import "./App.css";

const Swatch = ({ color }: any) => {
  console.log("Swatch rendered");

  return (
    <div
      style={{ margin: 2, width: 75, height: 75, backgroundColor: color }}
    ></div>
  );
};

const MemoedSwatch = memo(Swatch);

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  console.log("App rendered");

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-Render App
        </button>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
          Change color
        </button>
        <div>
          <MemoedSwatch color={color} />
        </div>
      </div>
    </div>
  );
}

export default App;

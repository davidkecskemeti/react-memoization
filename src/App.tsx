import { useState, memo, useMemo } from "react";
import "./App.css";

const Swatch = ({ params }: any) => {
  console.log(params);

  console.log(`Swatch rendered ${params?.color}`);

  return (
    <div
      style={{
        margin: 2,
        width: 75,
        height: 75,
        backgroundColor: params?.color,
      }}
    ></div>
  );
};

// const MemoedSwatch = memo(Swatch, (prevProps: any, nextProps: any) => {
//   return prevProps.params.color === nextProps.params.color;
// });

const MemoedSwatch = memo(Swatch, (prevProps: any, nextProps: any) => {
  return prevProps.params.color === nextProps.params.color;
});

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  const params = useMemo(() => ({ color }), [color]);

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
          <MemoedSwatch params={params} />
        </div>
      </div>
    </div>
  );
}

export default App;

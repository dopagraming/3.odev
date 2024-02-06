import React, { useState } from "react";
import "./App.css";
import SetText from "./components/SetText";
const App = () => {
  const [value, setValue] = useState({
    Mavi: 0,
    Sari: 0,
  });
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <button
          style={{ backgroundColor: "#2196F3" }}
          onClick={() =>
            setValue({
              ...value,
              Mavi: value.Mavi + 1,
            })
          }
        >
          Mavi
        </button>
        <button
          style={{ backgroundColor: "#FFC107" }}
          onClick={() => {
            setValue({
              ...value,
              Sari: value.Sari + 1,
            });
          }}
        >
          Sari
        </button>
      </div>
      <SetText value={value} />
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          setValue({
            Mavi: 0,
            Sari: 0,
          });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;

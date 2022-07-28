import React from "react";
import "./App.css";
import Child from "./STATE_LIFTING/Child";
function App() {
  const data = "I am from parents page";
  const handleChildData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Child data1={data} onchildData={handleChildData} />
    </div>
  );
}

export default App;

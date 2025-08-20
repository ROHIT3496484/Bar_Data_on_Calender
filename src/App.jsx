import React from "react";
import Calendarview from "./components/Calendarview";
import Barchartview from "./components/Barchartview";

const App=()=> {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Calendar with Bar Graph</h1>
      <Calendarview />
      <Barchartview />
    </div>
  );
}
export default App;

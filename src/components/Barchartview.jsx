import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/dataSlice";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Barchartview=()=> {
  const dispatch = useDispatch();
  const { selectedDate, data, showModal } = useSelector(
    (state) => state.calendarData
  );

  if (!showModal) return null;

  const selectedData = data[selectedDate];

  // 🔹 Transform data into recharts-friendly format
  const chartData = selectedData
    ? selectedData.map((entry) => {
        const key = Object.keys(entry)[0];
        return { name: key, value: entry[key] };
      })
    : [];

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "30%",
        width: "40%",
        padding: "20px",
        background: "white",
        border: "1px solid gray",
        borderRadius: "10px",
        zIndex: 1000
      }}
    >
      <h3>Data for {selectedDate}</h3>

      {chartData.length > 0 ? (
        <BarChart width={400} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      ) : (
        <p style={{ color: "red" }}>No data found for the selected date.</p>
      )}

      <button
        onClick={() => dispatch(closeModal())}
        style={{ marginTop: "20px", padding: "10px" }}
      >
        Close
      </button>
    </div>
  );
}
export default Barchartview;
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectDate } from "../redux/dataSlice";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendarview=()=> {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calendarData.data);

  // Convert keys to Date objects for easy matching
  const datesWithData = Object.keys(data).map((date) =>
    moment(date, "DD-MM-YYYY").startOf("day").toDate()
  );

  // When user clicks a date
  const handleSelectSlot = ({ start }) => {
    const selectedDate = moment(start).format("DD-MM-YYYY");
    dispatch(selectDate(selectedDate));
  };

  // 🔹 Highlight cells that have data
  const dayPropGetter = (date) => {
    const hasData = datesWithData.some(
      (d) => moment(d).isSame(moment(date), "day")
    );
    if (hasData) { return {
        style: {
          backgroundColor: "#e6f7ff",
          border: "2px solid #1890ff",
          borderRadius: "6px"
        }
      };
    }
    return {};
  };

  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={[]} // no "Data Available" events
        selectable
        onSelectSlot={handleSelectSlot}
        startAccessor="start"
        endAccessor="end"
        dayPropGetter={dayPropGetter}
      />
    </div>
  );
}
export default Calendarview;
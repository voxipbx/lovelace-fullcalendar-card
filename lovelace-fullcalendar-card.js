import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const events = [
  { title: "event 1", start: "2023-01-24 10:10:00" },
  { title: "event 2", start: "2023-01-24 11:00:00" },
  { title: "event 3", start: "2023-01-24 11:15:00" },
  { title: "event 4", start: "2023-01-24 11:20:00" },
  { title: "event 5", start: "2023-01-24 12:10:00" },
  { title: "event 6", start: "2023-01-24 13:10:00" },
];

const FullCalendarcore = () => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      events={events}
      initialView="timeGridDay"
    />
  );
};

export default FullCalendarcore;


import { Calendar } from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

let calendar = new Calendar(calendarEl, {
  plugins: [ timeGridPlugin ],
  initialView: 'timeGridDay'
});


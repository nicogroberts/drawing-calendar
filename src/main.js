import { displayCurrentDate, generateCalendar } from "./calendar";

displayCurrentDate();
generateCalendar();

let yearlyContributions = 0;
const mainSection = document.querySelector("main");
const yearlySummary = document.getElementById("yearly-summary");
yearlySummary.textContent = `${yearlyContributions} contributions in the last year`;
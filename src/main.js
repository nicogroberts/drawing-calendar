import { displayCurrentDate, generateCalendar } from "./calendar";
import { generateActivityLog } from "./activitylog";
import { getFile } from "./fileloader";

document.getElementById("open-file").addEventListener("click", getFile);

displayCurrentDate();
generateCalendar();
generateActivityLog();

let yearlySessions = 0;
const mainSection = document.querySelector("main");
const yearlySummary = document.getElementById("yearly-summary");
yearlySummary.textContent = `${yearlySessions} sessions in the last year`;
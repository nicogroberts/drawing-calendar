import { displayCurrentDate, generateCalendar } from "./calendar";
import { generateActivityLog } from "./activitylog";
import { getFile, getActivities } from "./fileloader";

let isLoaded = false;

document.getElementById("open-file").addEventListener("click", async () => {
    isLoaded = await getFile();
    if (isLoaded) {
        generateActivityLog(getActivities());
    }
});

displayCurrentDate();
generateCalendar();

let yearlySessionsCount = 0;
let yearlyTimeAmount = 0;
const mainSection = document.querySelector("main");
const yearlySessions = document.getElementById("yearly-sessions");
yearlySessions.textContent = `${yearlySessionsCount} sessions in the last year`;
const yearlyTime = document.getElementById("yearly-time");
yearlyTime.textContent = `${yearlyTimeAmount} hours in the last year`;
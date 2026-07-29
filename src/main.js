import { displayCurrentDate, generateCalendar, populateCalendar, toSeconds } from "./calendar";
import { generateActivityLog } from "./activitylog";
import { getFile, getActivities } from "./fileloader";

let isLoaded = false;

document.getElementById("open-file").addEventListener("click", async () => {
    isLoaded = await getFile();
    if (!isLoaded) return;

    const activities = getActivities();

    generateActivityLog(activities);
    populateCalendar(activities);

    let totalSeconds = 0;

    activities.forEach((activity, index) => {
        totalSeconds += toSeconds(activity);
        yearlySessionsCount = index + 1;
    });
    
    yearlyTimeAmount = totalSeconds / 3600;

    yearlySessions.textContent = `${yearlySessionsCount} sessions in the last year`;
    yearlyTime.textContent = `${yearlyTimeAmount.toFixed(1)} hours in the last year`;
    
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
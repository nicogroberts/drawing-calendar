export { displayCurrentDate, generateCalendar };

/**
 * Object containing all the days corresponding to each month
 */
const daysOfTheMonth = {
    Jan: 31,
    Feb: 28,
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    Jul: 31,
    Aug: 31,
    Sep: 30,
    Oct: 31,
    Nov: 30,
    Dec: 31
};

/**
 * An array containing the days of the week
 */
const daysOfTheWeek = ["Mon", "Wed", "Fri"];

/**
 * Object containing all the different colors corresponding to amount of activity levels
 */
const activityStates = {
    None: "#262626",
    Least: "#033a16",
    Less: "#196c2e",
    More: "#2ea043",
    Most: "#55d163"
};

// current date variable
const currentDate = new Date();
// current month variable
const currentMonth = currentDate.getMonth();
// current day variable
const currentDay = currentDate.getDate();

/**
 * Creates label for days of the week
 */
const generateDayLabel = (d) => {
    let day = document.createElement("span");
    day.classList.add("day");
    day.textContent = d;
    days.appendChild(day);
}

// Get the calendar div
const calendar = document.getElementById("calendar");
const months = document.createElement("div");
months.classList.add("months");
calendar.appendChild(months);
const days = document.createElement("div");
days.classList.add("days");
daysOfTheWeek.forEach(generateDayLabel);
calendar.appendChild(days);

/**
 * Displays current date in the console
 */
const displayCurrentDate = () => {
    console.log(`Current Date: ${currentDate}, Month: ${currentMonth}, Day: ${currentDay}`);
};

/**
 * Creates calendar elements on the DOM
 */
const generateCalendar = () => {
    for (let i = 0; i <= currentMonth; i++)
    {
        let month = document.createElement("span");
        month.classList.add("month");
        month.textContent = Object.keys(daysOfTheMonth)[i];
        months.appendChild(month);
        
        console.log(Object.entries(daysOfTheMonth)[i]);
        if (i === currentMonth) {
            console.log(currentDay);
        }
    }
};
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

// Hardcoded start date cause it's my project and that when I started logging data
const startDate = new Date(2026, 7, 1);

// Current date variable
const currentDate = new Date();
// Current month variable
const currentMonth = currentDate.getMonth();
// Current day variable
const currentDay = currentDate.getDate();

/**
 * Creates label for days of the week
 * @param {D} d The day name string
 */
const generateDayLabel = (d) => {
    let day = document.createElement("span");
    day.id = d;
    day.textContent = d;
    days.appendChild(day);
};

/**
 * Creates the cells in the legend of the calendar
 * @param {C} c The cell color string
 */
const generateLegendCells = (c) => {
    let cell = document.createElement("span");
    cell.classList.add("cell");
    cell.style.backgroundColor = c;
    legend.appendChild(cell);
};

// Get the calendar div
const calendar = document.getElementById("calendar");
// Create container
const calendarContainer = document.createElement("div");
calendarContainer.classList.add("calendar-container");
calendar.appendChild(calendarContainer);
// Create days div
const days = document.createElement("div");
days.classList.add("days");
daysOfTheWeek.forEach(generateDayLabel);
calendarContainer.appendChild(days);
// Create months div
const months = document.createElement("div");
months.classList.add("months");
calendarContainer.appendChild(months);
// Create legend
const legend = document.createElement("div");
legend.classList.add("legend");
calendar.appendChild(legend);
// Less label
const lessLabel = document.createElement("span");
lessLabel.classList.add("less-label");
lessLabel.textContent = "Less";
legend.appendChild(lessLabel);
Object.values(activityStates).forEach(generateLegendCells);
const moreLabel = document.createElement("span");
// More label
moreLabel.classList.add("more-label");
moreLabel.textContent = "More";
legend.appendChild(moreLabel);

/**
 * Displays current date in the console
 */
const displayCurrentDate = () => {
    console.log(`Current Date: ${currentDate}, Month: ${currentMonth}, Day: ${currentDay}`);
};

/**
 * Gets a number of days to be offset the beginning of a month based on the current year
 * @param {*} year The current year
 * @param {*} month The current month
 * @returns Amount of days to be offset
 */
const getMonthOffset = (year, month) => {
    return (new Date(year, month, 1).getDay() + 6) % 7;
};

/**
 * Creates calendar elements on the DOM
 */
const generateCalendar = () => {
    const year = new Date().getFullYear();

    for (let i = 0; i <= currentMonth; i++) {
        // Create month labels
        const month = document.createElement("span");
        month.classList.add("month");
        month.textContent = Object.keys(daysOfTheMonth)[i];
        months.appendChild(month);
        const cellContainer = document.createElement("div");
        cellContainer.classList.add("cell-container");
        month.appendChild(cellContainer);

        // Create cols div
        let col = document.createElement("div");
        col.classList.add("col");
        cellContainer.appendChild(col);

        // Get the offset
        let dayCounter = getMonthOffset(year, i);

        // Generate offset cells
        for (let j = 0; j < dayCounter; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell", "empty");
            col.append(cell);
        }

        // Calcuate days per month
        const daysToGenerate = i === currentMonth ? currentDay : Object.values(daysOfTheMonth)[i];

        // Create cells
        for (let j = 0; j < daysToGenerate; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            col.appendChild(cell);
            dayCounter++;

            if (dayCounter === 7) {
                col = document.createElement("div");
                col.classList.add("col");
                cellContainer.appendChild(col);
                dayCounter = 0;
            }
        }
    }
};

/**
 * Changes the cells apperance based on the data from activities
 * @param {*} activities An array of strings representing activities (drawing sessions)
 */
const populateCalendar = (activities) => {
    // Call function to convert time into seconds
    const timeInSeconds = activities.reverse().map(toSeconds); 
    // Get the max value
    const max = Math.max(...timeInSeconds);

    // Get the normalized value
    timeInSeconds.forEach(time => {
        const normalized = time / max;
    });

    const months = document.querySelectorAll(".months .month");

    months.forEach((month, monthIndex) => {
        const cols = month.querySelectorAll(".cell-container .col");

        cols.forEach((col, colIndex) => {
            const cells = col.querySelectorAll(".cell:not(.empty)");

            cells.forEach((cell, cellIndex) => {
                console.log(cell, cellIndex);

                if ((monthIndex + 1) === startDate.getMonth() && colIndex === 0 && cellIndex === 0) {
                    // This is the cell to start populating with activities
                }
            });

        });
    });
};

/**
 * Converts a time to total amount of seconds
 * @param {*} activities An array of strings representing activities (drawing sessions)
 */
const toSeconds = (activity) => {
    const parts = activity.split(":").map(Number);

    if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
        return parts[0] * 60 + parts[1]; 
    } else {
        return 0; // time less than a minute shall not be considered
    }

};

export { displayCurrentDate, generateCalendar, populateCalendar };
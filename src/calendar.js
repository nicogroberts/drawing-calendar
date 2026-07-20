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
 * @param {D} d The day name string
 */
const generateDayLabel = (d) => {
    let day = document.createElement("span");
    day.classList.add("day");
    day.textContent = d;
    days.appendChild(day);
}

/**
 * Creates the cells in the legend of the calendar
 * @param {C} c The cell color string
 */
const generateLegendCells = (c) => {
    let cell = document.createElement("span");
    cell.classList.add("cell");
    cell.style.backgroundColor = c;
    legend.appendChild(cell);
}

// Get the calendar div
const calendar = document.getElementById("calendar");
// Create months div
const months = document.createElement("div");
months.classList.add("months");
calendar.appendChild(months);
const days = document.createElement("div");
// Create days div
const daysContainer = document.createElement("div");
daysContainer.classList.add("days-container");
calendar.appendChild(daysContainer);
days.classList.add("days");
daysOfTheWeek.forEach(generateDayLabel);
daysContainer.appendChild(days);
// Create cols div
const colsContainer = document.createElement("div");
colsContainer.classList.add("cols-container");
daysContainer.appendChild(colsContainer);
let col = document.createElement("div");
col.classList.add("col");
colsContainer.appendChild(col);
// Create legend
const legend = document.createElement("div");
legend.classList.add("legend");
calendar.appendChild(legend);
const lessLabel = document.createElement("span");
lessLabel.classList.add("less-label");
lessLabel.textContent = "Less";
legend.appendChild(lessLabel);
Object.values(activityStates).forEach(generateLegendCells);
const moreLabel = document.createElement("span");
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
 * Creates calendar elements on the DOM
 */
const generateCalendar = () => {
    for (let i = 0; i <= currentMonth; i++)
    {
        // Create month labels
        const month = document.createElement("span");
        month.classList.add("month");
        month.textContent = Object.keys(daysOfTheMonth)[i];
        months.appendChild(month);

        let dayCounter = 0;

        // Create a day div for each day up till the current month
        if (i !== currentMonth) {
            for (let j = 0; j < Object.values(daysOfTheMonth)[i]; j++) {
                createNewCell();
                dayCounter++;

                if (dayCounter === 7) {
                    createNewColumn();
                    dayCounter = 0;
                }
            }
            createNewColumn();
        }
        
        if (i === currentMonth) {
            console.log(currentDay);
            for (let j = 0; j < currentDay; j++) {
                createNewCell();
                dayCounter++;

                if (dayCounter === 7) {
                    createNewColumn();
                    dayCounter = 0;
                }
            }
        }
    }
};

/**
 * Creates a new column
 */
const createNewColumn = () => {
    col = document.createElement("div");
    col.classList.add("col");
    colsContainer.appendChild(col);
}

/**
 * Creates a new cell
 */
const createNewCell = () => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    col.appendChild(cell);
}
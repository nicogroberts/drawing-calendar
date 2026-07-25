// Get the activity log div
const activityLog = document.getElementById("activity-log");
// Create section heading
const logHeading = document.createElement("div");
logHeading.textContent = "Drawing activity";
activityLog.appendChild(logHeading);
// get activity object from Obsidian

/**
 * Creates a log of session information based on data from activities
 * @param {*} activities An array of objects representing activities (drawing sessions)
 */
const generateActivityLog = (activities) => {
    console.log(activities);
};

export { generateActivityLog };
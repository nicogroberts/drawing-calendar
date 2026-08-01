// Get the activity log div
const activityLog = document.getElementById("activity-log");
// Create section heading
const logHeading = document.createElement("div");
logHeading.classList.add("log-heading");
logHeading.textContent = "Drawing activity";
activityLog.appendChild(logHeading);
// Hardcoded start date cause it's my project, thats when I started logging data, and I don't miss a day lol
const startDate = new Date(2026, 6, 1);

/**
 * Creates a log of session information based on data from activities
 * @param {*} activities An array of strings representing activities (drawing sessions)
 */
const generateActivityLog = (activities) => {
    const dateText = new Date(startDate);
    dateText.setDate(dateText.getDate() + activities.length);
    // for each activity generate a message containing the date and activity time
    activities.reverse().forEach((activity, index) => {
        const logMessage = document.createElement("div");
        logMessage.classList.add("log-message");
        // Hide all activities excluding the first three
        if (index >= 3) {
            logMessage.classList.add("hide");
        }
        activityLog.appendChild(logMessage);
        const messageHeading = document.createElement("div");
        messageHeading.classList.add("message-heading");
        dateText.setDate(dateText.getDate() - 1);
        messageHeading.textContent = `Drawing Session Day ${activities.length - index} on ${dateText.toLocaleDateString('en-US')}`;
        // in the literal add "On ${startDate} at the end when startDate increases properly"
        logMessage.appendChild(messageHeading);
        const messageInfo = document.createElement("div");
        messageInfo.classList.add("message-info");
        messageInfo.textContent = `Session time: ${activity}`;
        logMessage.appendChild(messageInfo);
        if (index === activities.length - 1) {
            const btnContainer = document.createElement("div");
            btnContainer.classList.add("btn-container");
            activityLog.appendChild(btnContainer);
            const showMore = document.createElement("button");
            showMore.id = "show-more";
            showMore.textContent = "Show More Activity";
            btnContainer.appendChild(showMore);
            document.getElementById("show-more").addEventListener("click", showMoreActivities);
        }
    });
};

/**
 * Handles the click function of show more button, displays all log messages
 */
const showMoreActivities = () => {
    console.log("Showing more activities");
    // Once this function is called display all the activities
    const logMessages = activityLog.querySelectorAll("div");
    logMessages.forEach(logMessage => {
        if (logMessage.classList.contains("hide")) {
            logMessage.classList.remove("hide");
        }
    });
    // Hide button
    const showMore = document.getElementById("show-more");
    showMore.classList.add("hide");
};

export { generateActivityLog };
// Get the activity log div
const activityLog = document.getElementById("activity-log");
// Create section heading
const logHeading = document.createElement("div");
logHeading.classList.add("log-heading");
logHeading.textContent = "Drawing activity";
activityLog.appendChild(logHeading);
// Hardcoded start date cause it's my project, thats when I started logging data, and I don't miss a day lol
let startDate = new Date(2026, 7, 1);

/**
 * Creates a log of session information based on data from activities
 * @param {*} activities An array of strings representing activities (drawing sessions)
 */
const generateActivityLog = (activities) => {
    // for each activity generate a message containing the date and activity time
    activities.reverse().forEach((activity, index) => {
        console.log(activity);
        const logMessage = document.createElement("div");
        logMessage.classList.add("log-message");
        activityLog.appendChild(logMessage);
        const messageHeading = document.createElement("div");
        messageHeading.classList.add("message-heading");
        messageHeading.innerText = `Drawing Session Day ${activities.length - index}`;
        // in the literal add "On ${startDate} at the end when startDate increases properly"
        logMessage.appendChild(messageHeading);
        const messageInfo = document.createElement("div");
        messageInfo.classList.add("message-info");
        messageInfo.innerText = `Session time: ${activity}`;
        logMessage.appendChild(messageInfo);
        if (index === activities.length - 1) {
            const btnContainer = document.createElement("div");
            btnContainer.classList.add("btn-container");
            activityLog.appendChild(btnContainer);
            const showMore = document.createElement("button");
            showMore.id = "show-more";
            showMore.innerText = "Show More Activity";
            btnContainer.appendChild(showMore);
            document.getElementById("show-more").addEventListener("click", showMoreActivities);
        }
    });
};

const showMoreActivities = () => {
    console.log("Showing more activities");
};

export { generateActivityLog };
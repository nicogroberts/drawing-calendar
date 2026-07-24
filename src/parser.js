/**
 * Parses the text to get the drawing time per session
 * @param {*} text the text recieved from fileloader.js to be parsed
 */
const parseFile = (text) => {
    console.log("Text received by parser:");
    const lines = text.split(/\r?\n/);
    
    lines.forEach((line) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith("Day")) {
            // Get the day number then add it to an activity object
            let justInt = trimmedLine.replace( /[^\d.]/g, '');
            let dayNumber = parseInt(justInt, 10);
            console.log(dayNumber);
        }
        if (trimmedLine.startsWith("- Time:")) {
            // Get the time then add it to an activity object
            let activityTime = trimmedLine.match(/\d{1,2}:\d{2}:\d{2}/);
            console.log(activityTime);
        }
    });
};

export { parseFile };
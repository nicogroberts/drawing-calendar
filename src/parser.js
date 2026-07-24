/**
 * Parses the text to get the drawing time per session
 * @param {*} text the text recieved from fileloader.js to be parsed
 */
const parseFile = (text) => {
    console.log("Text received by parser:");
    const lines = text.split(/\r?\n/);

    const results = [];
    let curr = null;

    lines.forEach((line) => {

        const trimmedLine = line.trim();
        if (trimmedLine.startsWith("Day")) {
            // Get the day number then add it to an activity object
            const dayNumber = parseInt(trimmedLine.replace( /[^\d.]/g, ''), 10);
            curr = {
                date: dayNumber,
                time: null
            };
        }
        if (trimmedLine.startsWith("- Time:") && curr) {
            // Get the time then add it to an activity object
            const timeMatch = trimmedLine.match(/\d{1,2}:\d{2}:\d{2}/);
            const activityTime = timeMatch ? timeMatch[0] : null;
            curr.time = activityTime;
            results.push(curr);
        }
    });

    return results;
};

export { parseFile };
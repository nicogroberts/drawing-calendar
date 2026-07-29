/**
 * Parses the text to get the drawing time per session
 * @param {*} text the text recieved from fileloader.js to be parsed
 */
const parseFile = (text) => {
    const lines = text.split(/\r?\n/);

    const results = [];

    lines.forEach((line) => {

        const trimmedLine = line.trim();
        if (trimmedLine.startsWith("- Time:")) {
            // Get the time then add it to an activity object
            const timeMatch = trimmedLine.match(/\d{1,2}:\d{2}:\d{2}/);
            const activityTime = timeMatch ? timeMatch[0] : null;
            results.push(activityTime);
        }
    });

    return results;
};

export { parseFile };
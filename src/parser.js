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
            console.log(trimmedLine);
            // Get the day number then add it to an activity object
            let justInt = trimmedLine.replace( /[^\d.]/g, '');
            let dayNumber = parseInt(justInt, 10);
            console.log(dayNumber);
        }
        if (trimmedLine.startsWith("- Time:")) {
            console.log(trimmedLine);
            // Get the time then add it to an activity object
        }
    });
};

export { parseFile };
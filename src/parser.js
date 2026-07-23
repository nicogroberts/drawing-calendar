/**
 * Parses the text to get the drawing time per session
 * @param {*} text the text recieved from fileloader.js to be parsed
 */
const parseFile = (text) => {
    console.log("Text received by parser:");
    const lines = text.split(/\r?\n/);
    
    lines.forEach((line) => {
        line.trim();
        console.log(line);
    });
}

export { parseFile };
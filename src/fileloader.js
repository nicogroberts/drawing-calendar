import { parseFile } from "./parser";

let fileHandle;

/**
 * Handles loading file in from file selection
 */
const getFile = async () => {
    [fileHandle] = await window.showOpenFilePicker();
    // Get text from file
    if (fileHandle) {
        const file = await fileHandle.getFile();
        const text = await file.text();
        // Send text to be parsed
        parseFile(text);
    }
};

export { getFile };
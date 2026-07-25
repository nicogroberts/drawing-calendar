import { parseFile } from "./parser";

let fileHandle;
let activities = [];

/**
 * Handles loading file in from file selection
 */
const getFile = async () => {
    try {
        [fileHandle] = await window.showOpenFilePicker();
        // Get text from file
        if (fileHandle) {
            const file = await fileHandle.getFile();
            const text = await file.text();
            // Send text to be parsed
            activities = parseFile(text);
            // Return true if activities was updated
            return true;
        }
    } catch (err) {
        console.error(err);
        return false;
    }
};

/**
 * Getter for activities
 * @returns An array of objects representing activities (drawing sessions)
 */
const getActivities = () => {
    return activities;
};

export { getFile, getActivities };
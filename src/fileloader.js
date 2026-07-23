let fileHandle;

/**
 * Handles loading file in from file selection
 */
export const getFile = async () => {
    [fileHandle] = await window.showOpenFilePicker();
    // Get file using api then send to parser
    if (fileHandle) {
        const file = await fileHandle.getFile();
        const text = await file.text();

        console.log(text);
    }
}
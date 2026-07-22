let fileHandle;

export async function getFile() {
    [fileHandle] = await window.showOpenFilePicker();
    console.log(fileHandle);
}
function getFileName(file) {
    const filePath = file.tempFilePath;
    const fileSplit = filePath.split("\\");

    return `${fileSplit[1]}/${fileSplit[2]}`;
}

module.exports = { getFileName };

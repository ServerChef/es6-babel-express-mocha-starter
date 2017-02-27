export const getTasks = (gulpFile) => {
    return Object.keys(gulpFile.tasks);

};

export const hasTask = (gulpFile, task) => {
    return getTasks(gulpFile).indexOf(task) >= 0;

};
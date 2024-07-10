const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const copyFile = (src, dest) => {
    fs.copyFile(src, dest, (err) => {
        if (err) {
            console.error(`Error copying file from ${src} to ${dest}:`, err);
        } else {
            console.log(`Copied ${src} to ${dest}`);
        }
    });
};

const synchronizeFiles = (filePath, root, cache) => {
    const relativePath = path.relative(root, filePath);
    const cacheFilePath = path.join(cache, relativePath);

    fs.mkdirSync(path.dirname(cacheFilePath), { recursive: true });
    copyFile(filePath, cacheFilePath);
};

const startWatching = (root, cache) => {
    const watcher = chokidar.watch(root, {
        persistent: true,
    });

    watcher
        .on('add', (filePath) => synchronizeFiles(filePath, root, cache))
        .on('change', (filePath) => synchronizeFiles(filePath, root, cache))
        .on('unlink', (filePath) => {
            const relativePath = path.relative(root, filePath);
            const cacheFilePath = path.join(cache, relativePath);
            fs.unlink(cacheFilePath, (err) => {
                if (err) {
                    console.error(`Error deleting file ${cacheFilePath}:`, err);
                } else {
                    console.log(`Deleted ${cacheFilePath}`);
                }
            });
        });

    console.log('Watching for file changes...');
};

module.exports = { startWatching };

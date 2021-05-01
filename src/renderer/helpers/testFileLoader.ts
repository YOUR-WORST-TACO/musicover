import * as fs from 'fs';
import * as path from 'path';
import * as mm from 'music-metadata';

const sourceDir = "C:/Users/Steph/OneDrive/Music";

const extensionWhitelist = [
    '.mp3',
    '.wav',
    '.flac',
    '.aiff',
    '.aac',
    '.ape',
    '.mp2',
    '.asf',
    '.mka',
    '.mkv',
    '.mpc',
    '.mp4',
    '.m4a',
    '.m4v',
    '.ogg',
    '.webm',
    '.wv',
    'wma'
]

export const getDirectoryContents = async () => {
    try {
        const files = await recurseFiles(sourceDir);
        console.log(files);
    } catch (e) {
        console.error(e.message)
    }
}

const recurseFiles = async (directory) => {
    try {
        const directoryFiles = await fs.readdirSync(directory);

        let masterList = []
        const files = {
            root: directory,
            files: [],
        }

        for (const file of directoryFiles) {
            const fullPath = path.join(directory, file)
            if (await fs.statSync(fullPath).isDirectory()) {
                const childDirectory = await recurseFiles(fullPath);
                if (childDirectory.length > 0) {
                    masterList = masterList.concat(childDirectory);
                }
            } else {
                const fileData = {
                    name: file,
                    fullName: fullPath,
                    isMusicFile: false,
                    metadata: null,
                }

                if (extensionWhitelist.includes(path.extname(file))) {
                    // TODO handle missing data here
                    fileData.isMusicFile = true;
                    fileData.metadata = await mm.parseFile(fullPath); // load metadata
                    files.files.push(fileData);
                } else {
                    files.files.push(fileData);
                }
            }
        }
        if (files.files.length > 0) {
            masterList.push(files);
        }
        return masterList;
    } catch (e) {
        console.error(e);
        return [];
    }
}

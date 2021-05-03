import * as fs from 'fs';
import * as path from 'path';
import * as mm from 'music-metadata';

import * as File from '../models/file'

const sourceDir = "C:/Users/Steph/OneDrive/Music";

const musicExtensionWhitelist = [
    '.mp3', '.wav', '.flac', '.aiff', '.aac', '.ape', '.mp2', '.asf', '.mka',
    '.mkv', '.mpc', '.mp4', '.m4a', '.m4v', '.ogg', '.webm', '.wv', 'wma'
]

const extensionBlackList = [
    '.zip',
    '.pdf',
]

let fileCount = 0;
let musicFileCount = 0;
let notMusic = [];

export const getDirectoryContents = async () => {
    try {
        fileCount = 0;
        musicFileCount = 0;

        const t0 = performance.now();
        const files = await recurseFiles(sourceDir);
        const t1 = performance.now();

        const time = (t1 - t0)/1000

        // TODO remove post testing
        console.log("It took " + time + " seconds to parse " + fileCount + " files (" +
            musicFileCount + " were music).");

        return {
            fileCount: fileCount,
            musicFileCount: musicFileCount,
            time: time,
            files: files
        }
    } catch (e) {
        console.error(e.message)
        return null;
    }
};

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
                    newFile: false,
                }

                if (!extensionBlackList.includes(path.extname(file))) {

                    // TODO remove after testing
                    fileCount++;

                    // TODO check if file exists in db
                    const inDB = File.findByName(fullPath)
                    if (!inDB) {
                        File.save(file, directory, fullPath);
                        fileData.newFile = true;
                    }

                    if (musicExtensionWhitelist.includes(path.extname(file))) {
                        // TODO handle missing data here
                        fileData.isMusicFile = true;
                        fileData.metadata = await mm.parseFile(fullPath); // load metadata
                        files.files.push(fileData);

                        musicFileCount++;
                    } else {
                        // TODO remove post testing
                        notMusic.push(file);

                        files.files.push(fileData);
                    }
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
};

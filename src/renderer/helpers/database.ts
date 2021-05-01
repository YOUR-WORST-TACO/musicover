//import Database = require('better-sqlite3');
const Database = window.require('electron').remote.require('better-sqlite3');
import * as path from "path";

const location = path.join(__dirname, 'database.db')
console.log(location);
const options = {
    verbose: console.log,
};
export const db = new Database(location, options);

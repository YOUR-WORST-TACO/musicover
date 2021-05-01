import Database = require('better-sqlite3');
import * as path from "path";

const options = {
    verbose: console.log,
};
export const db = new Database(path.join(__dirname, 'database.db'), options);

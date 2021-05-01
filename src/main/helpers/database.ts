import Database = require('better-sqlite3');
import * as path from "path";

const location = path.join(__dirname, 'database.db')
console.log(location);
const options = {
    verbose: console.log,
};
export const database = new Database(location, options);

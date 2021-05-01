import Database = require('better-sqlite3');
import * as path from "path";
import {isDev} from "./devHandler";

const location = path.join(__dirname, 'database.db')
console.log(location);
const options = {
    verbose: isDev() ? console.log : null,
};
export const database = new Database(location, options);

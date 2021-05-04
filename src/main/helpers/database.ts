import Database = require('better-sqlite3');
import * as path from "path";

export default (dbPath, options) => {
    if (!options) {
        options = {};
    }

    if (!dbPath) {
        dbPath = path.join(__dirname, "database.db");
    }

    const connection = new Database(dbPath, options);

    return {
        connection: connection
    }
}

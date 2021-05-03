import db from "../helpers/database";
import * as path from "path";

export const schema =
    'CREATE TABLE IF NOT EXISTS files (\n' +
    '\tfile_id INTEGER PRIMARY KEY AUTOINCREMENT,\n' +
    '\tfile_name TEXT NOT NULL,\n' +
    '\tfile_full_name TEXT NOT NULL,\n' +
    '\tfile_path TEXT NOT NULL\n' +
    ');';

const schemaQuery = db.connection.prepare(schema);
schemaQuery.run();

export const findByName = (fullName: string) => {
    const findQuery = db.connection.prepare('SELECT * FROM files WHERE file_full_name = ?;');
    return findQuery.get(fullName);
}

export const save = (name: string, file_path: string, full_name?: string) => {
    if (!full_name) {
        full_name = path.join(file_path, name);
    }

    const saveQuery = db.connection.prepare('INSERT INTO files (file_name, file_full_name, file_path) VALUES (?, ?, ?);')
    saveQuery.run(name, full_name, file_path);
}

import db from "../helpers/database";

export const schema = 'CREATE TABLE IF NOT EXISTS settings (\n' +
    '\tsetting_key TEXT PRIMARY KEY NOT NULL UNIQUE,\n' +
    '\tsetting_value TEXT NOT NULL\n' +
    ');';

let settings;

const schemaQuery = db.connection.prepare(schema);
schemaQuery.run();

const exampleSettings = {
    "myKey": "thing"
}

export const getSettings = () => {
    const returnSettings = {};
    const query = db.conenction.prepare('SELECT * FROM settings;');

    const settings = query.all();

    for (const setting of settings) {
        returnSettings[setting.setting_key] = setting.setting_value;
    }
};

export const set = (key: string, value: any) => {
    const findQuery = db.connection.prepare('SELECT * FROM settings WHERE setting_key = ?');

    const find = findQuery.get(key);
    if (find) {
        const query = db.connection.prepare('UPDATE settings SET setting_value = ? WHERE setting_key = ?');
        query.run(value, key);
    } else {
        const query = db.connection.prepare('INSERT INTO settings (setting_key, setting_value) VALUES (?, ?)');
        query.run(key, value);
    }
};

export const get = (key: string) => {
    const findQuery = db.connection.prepare('SELECT * FROM settings WHERE setting_key = ?');
    return findQuery.get(key)?.setting_value;
}


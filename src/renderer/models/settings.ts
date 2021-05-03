import {db} from "../helpers/database/";

export const schema =
    'CREATE TABLE IF NOT EXISTS settings (\n' +
    '\tsetting_key TEXT PRIMARY KEY NOT NULL UNIQUE,\n' +
    '\tsetting_value TEXT NOT NULL\n,' +
    '\tsetting_typeof TEXT NOT NULL\n' +
    ');';

const schemaQuery = db.connection.prepare(schema);
schemaQuery.run();

const deserializeValue = (value: string, type: string) => {
    switch (type) {
        case 'object':
            return JSON.parse(value);
        case 'boolean':
            return value === 'true';
        case 'number':
            return Number(value);
        case 'bigint':
            return BigInt(value);
        case 'string':
            return value;
        default:
            return value;
    }
}

const serializeValue = (value: any) => {
    const type = typeof(value);
    let stringValue;
    if (value === null) return {type: null, stringValue: null};

    switch (type) {
        case 'object':
            stringValue = JSON.stringify(value);
            break;
        case 'boolean':
            stringValue = value ? 'true' : 'false';
            break;
        case 'number':
            stringValue = value.toString();
            break;
        case 'bigint':
            stringValue = value.toString();
            break;
        case 'string':
            stringValue = value;
            break;
        default:
            stringValue = null;
    }
    return {
        type: type,
        stringValue: stringValue,
    }
}

export const getSettings = () => {
    const returnSettings = {};
    const query = db.conenction.prepare('SELECT * FROM settings;');

    const settings = query.all();

    for (const setting of settings) {
        returnSettings[setting.setting_key] = deserializeValue(setting.setting_value, setting.setting_typeof);
    }
};

export const set = (key: string, value: any) => {
    const findQuery = db.connection.prepare('SELECT * FROM settings WHERE setting_key = ?;');

    const {type, stringValue } = serializeValue(value);
    const find = findQuery.get(key);
    if (find) {
        // if our value is null, we unset the setting
        if (type === null) {
            const deleteQuery = db.connection.prepare('DELETE FROM settings WHERE setting_key = ?;')
            deleteQuery.run(key);
        } else {
            const query = db.connection.prepare('UPDATE settings SET setting_value = ?, setting_typeof = ? WHERE setting_key = ?;');
            query.run(stringValue, type, key);
        }
    } else if (type !== null) {
        const query = db.connection.prepare('INSERT INTO settings (setting_key, setting_value, setting_typeof) VALUES (?, ?, ?);');
        query.run(key, stringValue, type);
    }
};

export const get = (key: string) => {
    const findQuery = db.connection.prepare('SELECT * FROM settings WHERE setting_key = ?;');

    const setting = findQuery.get(key);

    if (setting) {
        return deserializeValue(setting.setting_value, setting.setting_typeof);
    }
    return null;
}


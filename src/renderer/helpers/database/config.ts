let dbConnection;

export default (options?) => {
    if (dbConnection) {
        return dbConnection;
    }

    if (options?.db) {
        dbConnection = {connection: options.db}
        return dbConnection;
    }
    const {getGlobal} = require('@electron/remote');
    dbConnection = getGlobal('sharedVariable').db;
    return dbConnection;
};

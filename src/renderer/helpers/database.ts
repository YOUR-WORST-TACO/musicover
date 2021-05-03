export let db;

export const config = (options) => {
    if (options?.db) {
        db = options.db;
        return;
    }
    const {getGlobal} = require('@electron/remote');
    db = getGlobal('sharedVariable').db;
}

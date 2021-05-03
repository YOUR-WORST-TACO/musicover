const {getGlobal} = require('@electron/remote');
const db = getGlobal('sharedVariable').db;

export default db;

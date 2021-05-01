import * as ReactDOM from "react-dom";
import * as React from "react";
import {App} from "./components/App";

// import {db} from './helpers/database';
// db.prepare('CREATE TABLE IF NOT EXISTS contacts (\n' +
//     '\tcontact_id INTEGER PRIMARY KEY,\n' +
//     '\tfirst_name TEXT NOT NULL,\n' +
//     '\tlast_name TEXT NOT NULL,\n' +
//     '\temail TEXT NOT NULL UNIQUE,\n' +
//     '\tphone TEXT NOT NULL UNIQUE\n' +
//     ');')

ReactDOM.render(<App />, document.getElementById('root'));

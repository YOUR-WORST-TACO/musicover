import * as ReactDOM from "react-dom";
import * as React from "react";
import {App} from "./components/App";
import * as settings from './models/settings';

settings.set("test", "my value");
console.log("Test is", settings.get('test'));
settings.set("test", "a new value");
console.log("Test is", settings.get('test'));
console.log("This should be undefined:", settings.get('fake value'));

ReactDOM.render(<App />, document.getElementById('root'));

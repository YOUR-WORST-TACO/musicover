import * as ReactDOM from "react-dom";
import * as React from "react";
import {App} from "./components/App";

import * as settings from './models/settings';

settings.set("test", "my value");
settings.set("test", "a new value");
settings.set("delete", 'who cares');
settings.set("delete", null);
settings.set("test1", 12);
settings.set("test2", 13.12);
settings.set("test3", {myTest: "test", things: [1,2,3]});
settings.set("test4", [12, 12, 12])

ReactDOM.render(<App />, document.getElementById('root'));

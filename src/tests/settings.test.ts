import Database = require('better-sqlite3');
import * as path from "path";
import DBConfig from "../renderer/helpers/database/config";

import {suite, test} from "@testdeck/mocha";
import {expect} from "chai";

const connection = new Database(path.join(__dirname, 'testdb.db'), {});
DBConfig({db: connection});
import * as settings from '../renderer/models/settings';

@suite
class SettingsTest {
    @test
    testString() {
        settings.set("test1", "value");
        expect(settings.get("test1")).to.equal("value");
    }

    @test
    testBool() {
        settings.set("test2", true);
        expect(settings.get("test2")).to.equal(true);
    }

    @test
    testArray() {
        const myArray = [1,2,3,4,5,6];
        settings.set("test3", myArray);

        const savedArray = settings.get("test3");
        expect(typeof(savedArray)).to.equal("object");
        expect(Array.isArray(savedArray)).to.be.true;

        for (let i = 0; i < savedArray.length; i++) {
            expect(savedArray[i]).to.equal(myArray[i]);
        }
    }

    @test
    testObject() {
        const myObject = {test:"name", value:"number"}
        settings.set("test4", myObject);
        const savedObject = settings.get("test4");

        expect(typeof(savedObject)).to.equal("object");
        expect(savedObject.test).to.equal("name");
        expect(savedObject.value).to.equal("number");
    }

    @test
    testNumber() {
        settings.set("test5", 12);
        settings.set("test6", 12.12);
        expect(settings.get("test5")).to.equal(12);
        expect(settings.get("test6")).to.equal(12.12);
    }

    @test
    testBigInt() {
        settings.set("test7", BigInt(123123123123));
        expect(settings.get("test7")).to.equal(BigInt(123123123123));
    }

    @test
    testNull() {
        settings.set("test8", null);
        expect(settings.get("test8")).to.be.null;
    }

    @test
    testUnset() {
        settings.set("test1", null);
        expect(settings.get("test1")).to.be.null;
    }
}

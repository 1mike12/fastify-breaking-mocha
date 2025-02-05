import {expect} from "chai";
import {helloJavascript} from "./jsExample.js";

describe('jsExample', () => {
    it('should pass', async () => {
        expect(helloJavascript()).to.equal("world");
    });
})

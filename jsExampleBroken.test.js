import {expect} from "chai";
import {hello} from "./example.js";

describe('jsExampleBroken', () => {
    it('should pass', async () => {
        expect(hello()).to.equal("world");
    });
})

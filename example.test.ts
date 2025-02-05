import {hello} from "./example";
import {expect} from "chai";

describe('Example Test', () => {
    it('should pass', async () => {
        expect(hello()).to.equal("world");
    });
})

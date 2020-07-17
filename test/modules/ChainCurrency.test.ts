import { chainCurrency, ChainCurrencyType } from "../../src/index";
import config from "../config";


if (config.test.currencyModule) {
    describe("ChainCurrency tests", () => {

        test("convertToBase", () => {
            const nqt = chainCurrency.convertToBaseUnit(1, ChainCurrencyType.ARDOR);
            expect(nqt).toBe(100000000);
        });

        test("convertFromBase", () => {
            const ardr = chainCurrency.convertFromBaseUnit(100000000, ChainCurrencyType.ARDOR);
            expect(ardr).toBe(1);
        });

    });
} else {
    test("dummy", () => {
        expect(true).toBeTruthy();
    });
}
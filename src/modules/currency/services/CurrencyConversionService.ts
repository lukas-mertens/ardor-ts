import { ICurrencyConversionService } from "../../internal-types";
import { ChainCurrencyType, ChainCurrencyDecimals } from "../../../types";


export default class CurrencyConversionService implements ICurrencyConversionService {

    public currToNqt(amount: number, currencyType: ChainCurrencyType): number {
        const factor = this.getNominator(currencyType);
        return amount * factor;
    }

    private getNominator(currencyType: ChainCurrencyType): number {
        let exponent = 0;

        switch (currencyType) {
            case ChainCurrencyType.ARDOR: {
                exponent = ChainCurrencyDecimals.ARDOR;
                break;
            }
            case ChainCurrencyType.IGNIS: {
                exponent = ChainCurrencyDecimals.IGNIS;
                break;
            }
            default: exponent = 0;
        }

        return Math.pow(10, exponent);
    }


    public nqtToCurr(amount: number, currencyType: ChainCurrencyType): number {
        const divider = this.getNominator(currencyType);
        return amount / divider;
    }

}
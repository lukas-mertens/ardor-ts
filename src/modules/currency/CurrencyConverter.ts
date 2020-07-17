import { IChainCurrency, ChainCurrencyType } from "../../types";
import ChainCurrencyToNqtController from "./controllers/ChainCurrencyToNqtController";
import CurrencyConversionService from "./services/CurrencyConversionService";
import NqtToChainCurrencyController from "./controllers/NqtToChainCurrencyController";


export default class CurrencyConverter implements IChainCurrency {

    public convertToBaseUnit(amount: number, currency: ChainCurrencyType): number {
        const controller = new ChainCurrencyToNqtController(new CurrencyConversionService());
        return controller.run(amount, currency);
    }


    public convertFromBaseUnit(amount: number, currency: ChainCurrencyType): number {
        const controller = new NqtToChainCurrencyController(new CurrencyConversionService());
        return controller.run(amount, currency);
    }

}

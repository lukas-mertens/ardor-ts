import { ICurrencyConversionService } from "../../internal-types";
import { ChainCurrencyType } from "../../../types";

export default class NqtToChainCurrencyController {
    private readonly service: ICurrencyConversionService;


    constructor(service: ICurrencyConversionService) {
        this.service = service;
    }


    public run(amount: number, chainCurrencyType: ChainCurrencyType): number {
        return this.service.nqtToCurr(amount, chainCurrencyType);
    }
}
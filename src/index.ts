/* eslint-disable max-classes-per-file */
import AccountHandler from "./modules/account/AccountHandler";
import CurrencyConverter from "./modules/currency/CurrencyConverter";
import PassphraseGenerator from "./modules/passphrase/PassphraseGenerator";
import RequestHandler from "./modules/request/RequestHandler";
import TimeConverter from "./modules/time/TimeConverter";
import { IAccount, IChainCurrency, IPassphrase, IRequest, ITime } from "./types";

export * from "./types";


export const request: IRequest = new RequestHandler();
export const time: ITime = new TimeConverter();
export const chainCurrency: IChainCurrency = new CurrencyConverter();
export const account: IAccount = new AccountHandler();
export const passphrase: IPassphrase = new PassphraseGenerator();

export class Request extends RequestHandler {}
export class Time extends TimeConverter {}
export class ChainCurrency extends CurrencyConverter {}
export class Account extends AccountHandler {}
export class Passphrase extends PassphraseGenerator {}
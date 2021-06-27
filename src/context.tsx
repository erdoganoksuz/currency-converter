import { createContext } from "react";
import ExchangeRateApi from "./apis/exchange-rate";
import DateHelper from "./helpers/date";

const dateHelper = new DateHelper();

export const ApiContext = createContext({
  exchangeRateApi: new ExchangeRateApi(dateHelper),
  dateHelper,
});

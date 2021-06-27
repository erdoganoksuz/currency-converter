import DateHelper from "../helpers/date";

interface ExchangeApiResponse<T> {
  success: boolean;
  rates: T;
}

export interface TimeSeriesResponse {
  [key: string]: { [key: string]: string };
}

export interface RatesResponse {
  [currency: string]: number;
}

export default class ExchangeRateApi {
  private dateHelper: DateHelper;

  constructor(dateHelper: DateHelper) {
    this.dateHelper = dateHelper;
  }

  private apiPath = "https://api.exchangerate.host";

  async getTimeSeries(
    startDate: string,
    symbols: string,
    base: string,
  ): Promise<TimeSeriesResponse> {
    const url = `${
      this.apiPath
    }/timeseries?start_date=${startDate}&end_date=${this.dateHelper.getCurrentISODate()}&base=${base}&symbols=${symbols}`;
    const res = await fetch(url);
    const { rates } =
      (await res.json()) as ExchangeApiResponse<TimeSeriesResponse>;
    return rates;
  }

  async getRates(startDate: string, base: string): Promise<RatesResponse> {
    const res = await fetch(`${this.apiPath}/${startDate}?base=${base}`);
    const { rates } = (await res.json()) as ExchangeApiResponse<RatesResponse>;
    return rates;
  }
}

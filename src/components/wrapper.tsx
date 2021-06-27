import { useContext, useEffect, useState } from "react";
import HistoryChart from './history-chart';
import Calculator from './calculator';
import CurrencySelect from './currency-select';
import ChangeCurrencyButton from './change-currency-button';
import SourceInput from './source-input';
import DateInput from './date-input';
import { ApiContext } from '../context';
import { RatesResponse } from "../apis/exchange-rate";



const Wrapper = () => {
  const { exchangeRateApi, dateHelper } = useContext(ApiContext);

  const [startDate, setStartDate] = useState(dateHelper.getCurrentISODate());
  const [source, setSource] = useState("1");
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [rates, setRates] = useState<RatesResponse>({});

  const updateRates = async () => {
    const rates = await exchangeRateApi.getRates(startDate, from);
    setRates(rates)
  }

  const handleChangeCurrency = () => {
    setFrom(to);
    setTo(from)
  }

  useEffect(() => {
    updateRates();
  }, [from]);


  return <div className="container">
    <div className="row">
      <h2>Currency Converter</h2>
    </div>
    <div className="row">
      <div className="columns">
        <DateInput onChange={setStartDate} value={startDate} />
      </div>
    </div>
    <div className="row">
      <div className="three columns">
        <SourceInput value={source} onChange={setSource} />
      </div>
      <div className="four columns">
        <CurrencySelect rates={rates} onChange={(val) => setFrom(val)} label="From" value={from} />
      </div>
      <div className="one columns">
        <ChangeCurrencyButton onClick={handleChangeCurrency} />
      </div>
      <div className="four columns">
        <CurrencySelect rates={rates} onChange={setTo} label="To" value={to} />
      </div>
    </div>
    <div className="row">
      <div className="column">
        <Calculator fromCurrency={from} toCurrency={to} source={Number(source)} targetRatio={Number(rates[to])} />
      </div>
    </div>
    <div className="row">
      <div className="column">
        <HistoryChart fromCurrency={from} toCurrency={to} startDate={startDate} />
      </div>
    </div>
  </div>;
}

export default Wrapper;
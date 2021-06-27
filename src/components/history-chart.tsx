import { useContext, useEffect, useState } from "react";
import Chart from "react-google-charts";
import { ApiContext } from "../context";

interface HistoryChartProps {
    fromCurrency: string;
    toCurrency: string;
    startDate: string;
}

const HistoryChart = ({ fromCurrency, toCurrency, startDate }: HistoryChartProps) => {
    const [timeseries, setTimeseries] = useState<string[][]>([]);
    const { exchangeRateApi } = useContext(ApiContext);


    useEffect(() => {
        updateTimeseries();
    }, [fromCurrency, toCurrency, startDate]);


    const updateTimeseries = async () => {
        const rates = await exchangeRateApi.getTimeSeries(startDate, toCurrency, fromCurrency);

        const data = [["Year", "Ratio"]];

        for (const key in rates) {
            data.push([key, rates[key][toCurrency]])
        }

        setTimeseries(data)
    }


    const options = {
        title: `${fromCurrency} to ${toCurrency} History`,
        curveType: "function",
        legend: { position: "bottom" },
    };

    return <div>
        <h6>{fromCurrency} to {toCurrency} Chart</h6>
        <div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={timeseries}
                options={options}
            />
        </div>
    </div>
}

export default HistoryChart;
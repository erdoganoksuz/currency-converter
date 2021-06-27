interface CalculatorProps {
  source: number;
  targetRatio: number;
  fromCurrency: string;
  toCurrency: string;
}

const Calculator = ({
  source,
  targetRatio,
  fromCurrency,
  toCurrency,
}: CalculatorProps) => {
  const calculate = () => (source * targetRatio).toFixed(2);

  return (
    <h4>
      {source} {fromCurrency} equals to{" "}
      <b>
        {calculate()} {toCurrency}
      </b>
    </h4>
  );
};

export default Calculator;

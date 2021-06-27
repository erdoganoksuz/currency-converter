interface CurrencySelectProps {
  rates: {
    [key: string]: any;
  };
  onChange: (value: string) => void;
  value: string;
  label: string;
}

const CurrencySelect = ({
  rates,
  onChange,
  value,
  label,
}: CurrencySelectProps) => {
  const renderOptions = () => {
    const options = [];

    for (const key in rates) {
      options.push(
        <option key={key} value={key}>
          {key}
        </option>,
      );
    }

    return options;
  };

  return (
    <>
      <label>{label}</label>
      <select
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}
        className="u-full-width"
      >
        {renderOptions()}
      </select>
    </>
  );
};

export default CurrencySelect;

import { useState } from "react";

interface SourceInputProps {
  defaultValue: string;
  onChange: (value: string) => void;
}

const SourceInput = ({ defaultValue, onChange }: SourceInputProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleOnChange = (inputValue: string) => {
    const convertedValue = Number(inputValue);
    if (isNaN(convertedValue)) setValue(value);
    else {
      setValue(inputValue);
      onChange(inputValue);
    }
  };

  return (
    <>
      <label htmlFor="currency">Source</label>
      <input
        onChange={(e) => handleOnChange(e.currentTarget.value)}
        value={value}
        className="u-full-width"
        type="text"
        step="any"
        id="currency"
      />
    </>
  );
};

export default SourceInput;

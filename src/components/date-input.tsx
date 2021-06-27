interface DateInputProps {
  onChange: (val: string) => void;
  value: string;
}

const DateInput = ({ onChange, value }: DateInputProps) => {
  return (
    <>
      <label htmlFor="start-date">Date</label>
      <input
        type="date"
        className="u-full-width"
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}
        name="date"
        id="date"
      />
    </>
  );
};

export default DateInput;

interface SourceInputProps {
    value: string;
    onChange: (value: string) => void;
}

const SourceInput = ({ value, onChange }: SourceInputProps) => {

    return (<>
        <label htmlFor="currency">Source</label>
        <input onChange={(e) => onChange(e.currentTarget.value)} value={value} className="u-full-width" type="text" step="any" id="currency" />
    </>)
}

export default SourceInput;
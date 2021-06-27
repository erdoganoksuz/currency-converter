interface ChangeCurrencyButtonProps {
  onClick: () => void;
}

const ChangeCurrencyButton = ({ onClick }: ChangeCurrencyButtonProps) => {
  return (
    <img
      onClick={onClick}
      alt="change currency"
      height="24"
      id="convert-icon"
      width="24"
      src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39068/preview.png"
    />
  );
};

export default ChangeCurrencyButton;

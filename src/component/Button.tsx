
export const Button = ({
  btnText,
  btnType,
  className,
  handleClick,
  disabled,
}: {
  btnText: string;
  btnType: "submit" | 'button' | undefined;
  className?: string;
  handleClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={handleClick}
      type={btnType}
      className={`${className} w-full rounded-[5px] py-3 text-white text-center bg-blue-900 text-lg flex items-center gap-x-2 justify-center`}
      disabled={disabled}
    >
      <span>{btnText}</span>
    </button>
  );
};

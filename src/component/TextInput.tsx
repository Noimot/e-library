const TextInput = ({
  type,
  placeholder,
  className,
  name,
  value,
  onChange
}: {
  type: string;
  placeholder: string;
  className?: string;
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={`w-full h-12 bg-[#4C4C4C]/20 rounded-[5px] ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e)}
        className="w-full h-full bg-transparent outline-0 placeholder:capitalize placeholder:text-black text-sm px-4 text-black"
      />
    </div>
  );
};

export default TextInput;

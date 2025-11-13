type TextInputProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const TextInput = ({ placeholder, value, onChange }: TextInputProps) => {
  return (
    <input
      type="text"
      className="text-[13px] border border-[#404B69] rounded px-4 py-2 focus:outline-none w-[230px]"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

"use client"

const InputText = ({ type = "text" , label, name, placeholder, value, onChange}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-sm text-[#9B96AB]">{label}</p>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        required
        onChange={onChange}
        className="w-full text-forText border-b-2 border-[#D2C2FFAD] p-4  placeholder:text-placeholder focus:outline-0"
        autoComplete={`current-${name}`}
      />
    </div>
  );
};

export default InputText;

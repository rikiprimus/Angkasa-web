"use client"

const InputText = ({ label, type, name, placeholder}) => {
  return (
    <div className="w-full">
      <h1 className="font-poppins text-[#9B96AB]">{label}</h1>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full text-forText border-b-2 p-4  placeholder:text-placeholder focus:outline-0"
        autoComplete={`current-${name}`}
        required
        // onChange = {onChange}
      />
    </div>
  );
};

export default InputText;

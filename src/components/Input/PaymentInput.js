'use client'

const PaymentInput = ({ label, type, value, onChange, placeholder, maxLength, icon }) => {
  return (
    <div className="w-full text-dark">
      <h1 className="font-semibold text-dark px-2">{label}</h1>
      <div className="flex flex-row items-center border-2 rounded-xl">
        <div className="pl-4 text-grey1">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-full p-4 rounded-xl focus:outline-none"
        />
      </div>
    </div>
  );
};

export default PaymentInput;

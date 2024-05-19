import { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      htmlFor="toggleSwitch"
      className="flex items-center justify-center cursor-pointer"
    >
      <div
        className={`relative h-5 w-12 rounded-full transition duration-200 ${
          isChecked ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <input
          type="checkbox"
          id="toggleSwitch"
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only"
        />
        <span
          className={`absolute left-0 top-0 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
            isChecked ? "translate-x-7" : "translate-x-0"
          }`}
        ></span>
      </div>
    </label>
  );
};

export default ToggleSwitch;

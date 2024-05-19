"use client";
import React, { useState, useEffect, useRef } from "react";

const RangeSlider = ({ initialMin, initialMax, min, max, step, priceCap }) => {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e) => {
    const value = parseInt(e.target.value);
    if (maxValue - value >= priceCap) {
      setMinValue(value);
    }
  };

  const handleMax = (e) => {
    const value = parseInt(e.target.value);
    if (value - minValue >= priceCap) {
      setMaxValue(value);
    }
  };

  useEffect(() => {
    const minPercent = ((minValue - min) / (max - min)) * 100;
    const maxPercent = ((maxValue - min) / (max - min)) * 100;
    progressRef.current.style.left = `${minPercent}%`;
    progressRef.current.style.right = `${100 - maxPercent}%`;
  }, [minValue, maxValue, min, max]);

  return (
    <div className="flex flex-col w-full rounded py-4 space-y-3">
      <div className="flex justify-between text-[#6B6B6B]">
        <h1>Lowest</h1>
        <h1>Highest</h1>
      </div>
      <div className="slider relative h-1 rounded bg-gray-300">
        <div
          className="progress absolute h-1 bg-blue-500 rounded"
          ref={progressRef}
        ></div>
      </div>
      {/* input range */}
      <div className="range-input relative">
        <input
          onChange={handleMin}
          type="range"
          value={minValue}
          min={min}
          step={step}
          max={max}
          className="range-min absolute w-full -top-4 h-1 bg-transparent appearance-none pointer-events-auto"
        />
        <input
          onChange={handleMax}
          type="range"
          value={maxValue}
          min={min}
          step={step}
          max={max}
          className="range-max absolute w-full -top-4 h-1 bg-transparent appearance-none pointer-events-auto"
        />
      </div>
      {/* input number  */}
      <div className="flex justify-between">
        <input
          onChange={handleMin}
          type="number"
          value={minValue}
          min={min}
          step={step}
          max={max}
          className="w-16 bg-transparent outline-none text-[#2395FF] font-semibold"
        />
        <input
          onChange={handleMax}
          type="number"
          value={maxValue}
          min={min}
          step={step}
          max={max}
          className="w-16 bg-transparent outline-none text-[#2395FF] font-semibold"
        />
      </div>
    </div>
  );
};

export default RangeSlider;

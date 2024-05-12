"use client"
import { useState } from "react"
import {ThreeDot } from "react-loading-indicators";

const Button = ({onClick, children}) => {
  const [loading, setLoading] = useState(false);

  const doSomething = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };
  return (
    <button
      type="submit"
      className="w-full bg-primary text-white text-center font-bold p-4 rounded-xl shadow-[rgba(35,_149,_255,_0.19)_0px_9px_20px] hover:bg-opacity-90 active:bg-opacity-50"
      onClick={doSomething}
    >
      {loading ? (
        <ThreeDot variant="pulsate" color="#fff" size="small"/>
      ) : (
        children
      )}
    </button>
  )
}

export default Button

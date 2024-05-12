import { useState } from 'react'
import {ThreeDot } from 'react-loading-indicators';
import Link from 'next/link';

const ButtonBorder = ({href, children}) => {
  const [loading, setLoading] = useState(false);

  const doSomething = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };

  return (
    <Link
      className="bg-white text-primary text-center border-2 border-primary font-bold p-4 rounded-xl shadow-[rgba(35,_149,_255,_0.19)_0px_9px_20px] hover:shadow-opacity-80 hover:border-opacity-80 hover:text-opacity-80 active:shadow-opacity-50 active:border-opacity-50 active:text-opacity-50"
      href={href}
    >
      {loading ? (
        <ThreeDot variant="pulsate" color="#2395FF" size='small'/>
      ) : (
        children
      )}
    </Link>
  )
}

export default ButtonBorder

"use client"
import Link from "next/link";

const ButtonLink = ({children, href}) => {
  return (
    <Link
      href={href}
      className="w-full bg-primary text-white text-center font-bold p-4 rounded-xl shadow-[rgba(35,_149,_255,_0.19)_0px_9px_20px] hover:bg-opacity-90 active:bg-opacity-50"
    >
      {children}
    </Link>
  )
}

export default ButtonLink

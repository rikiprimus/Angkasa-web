"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const TrendingCard = ({ image, number, plane, province, country, href }) => {
  return (
    <Link href={href} className="relative flex flex-col justify-between w-[240px] h-[292px] overflow-hidden rounded-2xl px-6 py-5">
      <div className="absolute w-[700px] -left-10 -top-32 -z-10">
        <Image
          src={image}
          alt="Trending"
          width={550}
          height={200}
          layout="responsive"
          className=""
        />
      </div>
      <div className="w-[120px] flex items-center justify-center gap-1 bg-white bg-opacity-50 rounded-full py-1 px-2">
        <p className="font-semibold text-white">{number}</p>
        <p className="text-white ">{plane}</p>
      </div>
      <div className="w-full flex items-center justify-between gap-1 ">
        <div>
          <p className="font-bold text-white">{province}, </p>
          <p className="font-bold text-4xl text-white ">{country}</p>
        </div>
        <div className="p-2 rounded-full bg-white bg-opacity-50">
          <IoIosArrowForward size={20} color="#fff"/>
        </div>
      </div>
    </Link>
  );
};

export default TrendingCard;

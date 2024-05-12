import Image from "next/image";
import React from "react";

export const DestinationCard = () => {
  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="rounded-full border-[7px] p-2">
        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
          <div className="absolute w-[200px] -left-11 top-0 z-10">
            <Image
              src="/assets/paris.jpg"
              alt="Home Image"
              width={500}
              height={200}
              layout="responsive"
              className=""
            />
          </div>
        </div>
      </div>
      <p className="text-white text-xl">Paris</p>
    </div>
  );
};

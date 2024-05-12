"use client";
import TrendingCard from "@/components/Section/Home/TrendingCard";
import Link from "next/link";
import TrendLists from "../../../lib/trendinglist.json"

const Trending = () => {

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col">
        <h1 className="font-semibold text-primary tracking-[0.2em]">
          TRENDING
        </h1>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Trending destinations</h1>
          <Link href="/" className="text-primary">
            View all
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-8">
        {TrendLists.map((item, index) => (
          <div key={index}>
            <TrendingCard 
              href="/"
              image="/assets/bg-home.jpg"
              number="15"
              plane="Airlines"
              province="Tokyo"
              country="Japan"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

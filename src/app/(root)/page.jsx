import SearchCard from "@/components/Card/searchCard";
import { TopDestination } from "@/components/Section/Home/TopDestination";
import Trending from "@/components/Section/Home/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-64 m-5 md:mx-20 md:my-0">
      {/* section 1  */}
      <section className="relative w-full h-[800px] md:h-[1015px]">
        <div className="absolute top-20 md:right-[250px] xl:right-[590px] z-30">
          <SearchCard />
        </div>
        {/* title  */}
        <div className="flex flex-col gap-4 md:gap-8 py-20 md:py-28">
          <h1 className="font-bold text-4xl md:text-6xl text-[#414141]">Find your <label className="text-primary">Flight</label></h1>
          <p className="font-semibold text-lg text-[#979797]">and explore the world with us</p>
        </div>
        {/* image 1  */}
        <div className="absolute md:w-[900px] top-48 md:top-0 -right-[250px] md:-right-[600px] xl:-right-[300px]">
          <Image 
            src="/assets/bg-home.jpg"
            alt="Home Image"
            width={500}
            height={300}
            layout="responsive"
            className="rounded-[60px]"
          />
        </div>
        {/* image 2  */}
        <div className="absolute md:w-[900px] bottom-[10px] md:bottom-0 -left-[290px] xl:-left-[150px]">
          <Image 
            src="/assets/bg-home.jpg"
            alt="Home Image"
            width={900}
            height={400}
            layout="responsive"
            className="rounded-[60px]"
          />
        </div>
        {/* vector  */}
        <div className="absolute w-[150px] md:w-[300px] -bottom-[120px] -right-20  md:right-20 xl:right-[200px]">
          <Image 
            src="/assets/vector.svg"
            alt="Home Image"
            width={200}
            height={100}
            layout="responsive"
          />
        </div>
      </section>

      {/* section 2  */}
      <Trending />

      {/* section 3  */}
      <TopDestination />
    </main>
  );
}

import Header from "@/components/Layout/Header";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlaneDeparture, FaRegCircleCheck } from "react-icons/fa6";
import ContactForm from "@/components/Form/ContactForm";

const ContactPerson = () => {
  return (
    <div className="relative bg-[#F5F6FA]">
      {/* header  */}
      <div className="absolute z-10 w-full ">
        <Header />
      </div>
      {/* content  */}
      <div className="relative z-20 w-full flex flex-row gap-10 p-20">
        {/* left  */}
        <div className="w-full flex flex-col gap-8">
          <h1 className="font-bold text-white text-2xl">Contact Person Details</h1>
          <ContactForm />
        </div>
        {/* right  */}
        <div className="w-[600px] flex flex-col gap-8">
          <h1 className="font-bold text-white text-2xl">Flight Details</h1>
          <div className="bg-white rounded-lg">
            {/* informations  */}
            <div className="flex flex-col gap-5 p-6">
              <div className="flex items-center gap-5">
                <Image
                  src="/assets/garuda.png"
                  alt="garuda Logo"
                  width={120}
                  height={50}
                  priority
                />
                <h1 className="font-semibold text-[#595959]">
                  Garuda Indonesia
                </h1>
              </div>

              <div className="flex flex-row items-center gap-10">
                <h1 className="font-bold text-xl">Medan (IDN)</h1>
                <FaPlaneDeparture size={25} color="#979797" />
                <h1 className="font-bold text-xl">Tokyo (JPN)</h1>
              </div>

              <div className="flex gap-1 font-semibold text-[#6B6B6B] text-sm">
                <p>Sunday, 15 August 2020</p>
                <p className="font-bold">-</p>
                <p>12:33 - 15:21</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center text-primary">
                  <FaRegCircleCheck size={20} />
                  <p className="font-semibold">Refundable</p>
                </div>
                <div className="flex gap-2 items-center text-primary">
                  <FaRegCircleCheck size={20} />
                  <p className="font-semibold">Can reschedule</p>
                </div>
              </div>
              
            </div>
            {/* line  */}
            <div className="w-full border-[1px] border-[#E6E6E6]"></div>
            {/* total  */}
            <div className="flex justify-between items-center font-bold text-lg p-6">
              <h1 className="">Total Payment</h1>
              <div className="flex items-center gap-2 text-2xl text-primary">
                <h1>$ 145,00</h1>
                <IoIosArrowDown size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPerson;

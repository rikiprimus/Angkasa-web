import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuClock9 } from "react-icons/lu";
import MethodForm from "@/components/Form/methodForm";

export const Method = () => {
  return (
    <div className="w-full h-[900px] flex items-center justify-center bg-primary mb-32">
      <div className="w-[1248px] h-[650px] hidden md:flex flex-row justify-center gap-3 bg-white p-32">
        {/* left  */}
        <div className="w-1/2">
          <h1 className="font-semibold">Payment Method</h1>
          <MethodForm />
        </div>
        {/* right */}
        <div className="w-1/2 flex flex-col gap-1">
          <h1 className="font-semibold">Summary</h1>
          <div className="w-full flex items-start justify-between p-4">
            <div className="flex flex-col">
              <p className="flex items-center font-semibold">
                Pro(Billed Monthly) <IoMdArrowDropdown size={20} />
              </p>
              <p className="flex items-center text-xs text-primary underline">
                Save 20% with annual billing
              </p>
            </div>
            <p className="font-semibold text-xl flex items-end">
              $9.99 <label className="text-xs pb-[4px]">/month</label>
            </p>
          </div>
          <div className="w-full border-[1px] border-grey"></div>
          <div className="w-full flex flex-col gap-2 items-start p-4">
            <div className="w-full flex flex-row justify-between items-center">
              <p className="flex items-center font-semibold">
                Refferal Bonuses
              </p>
              <p className="font-semibold">-$2.00</p>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <p className="flex items-center font-semibold gap-1">
                Vat <LuClock9 size={14} />
              </p>
              <p className="font-semibold">-20%</p>
            </div>
            <p className="font-semibold text-xl flex items-end">
              $9.99 <label className="text-xs pb-[4px]">/month</label>
            </p>
          </div>
          <div className="w-full border-[1px] border-grey"></div>
          <div className="w-full flex items-start justify-between p-4">
            <div className="flex flex-col">
              <p className="flex items-center font-semibold">
                Today you pay(US Dollars)
              </p>
              <p className="flex items-center font-semibold text-xs">
                After 30 days $9.99
              </p>
            </div>
            <p className="font-semibold flex items-end">$0</p>
          </div>
          <button className="w-full rounded-lg p-4 text-center font-sm text-white bg-[#1565c0]">
            Try it free for 30 days
          </button>
        </div>
      </div>
    </div>
  );
};

export default Method;

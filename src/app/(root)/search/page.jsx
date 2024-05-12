import CardFilter from "@/components/Card/CardFilter"
import CardSelectTicket from "@/components/Card/CardSelectTicket"
import Header from "@/components/Layout/Header"
import { FaArrowRightArrowLeft, FaPlaneDeparture } from "react-icons/fa6"

const Search = () => {
  return (
    <div className="bg-[#F5F6FA] relative">
      {/* header  */}
      <div className="relative z-10">
        <Header value={true}/>
      </div>

      <div className="flex px-20 py-8">
        {/* Card filter  */}
        <CardFilter />
          
        {/* Card select ticket  */}
        <CardSelectTicket />
      </div>

    </div>
  )
}

export default Search
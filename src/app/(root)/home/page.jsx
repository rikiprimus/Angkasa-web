import CardFilter from "@/components/Card/CardFilter"
import CardSelectTicket from "@/components/Card/CardSelectTicket"
import Header from "@/components/Layout/Header"

const page = () => {
  return (
    <div className="bg-[#F5F6FA] relative">
      {/* header  */}
      <div className="relative z-10">
        <Header value={true}/>
      </div>
      {/* content */}
      <div className="flex px-20 py-8">
        {/* Card filter  */}
        <div className="max-w-[340px] w-1/4">
          <CardFilter />
        </div>
        {/* Card select ticket  */}
        <div className="w-3/4">
          <CardSelectTicket  />
        </div>
      </div>

    </div>
  )
}

export default page
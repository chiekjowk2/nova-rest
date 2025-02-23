import Navbar from "@/components/Navbar";
import { FaRegStar, FaStar } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex max-w-full lg:max-w-5xl lg:mx-auto p-4 mt-8 justify-between flex-col md:flex-row">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-[#05B462] font-sans mb-2">
            Monitor your sleep
          </h1>
          <h1 className="text-5xl font-bold text-[#A6ADBA]">
            with Tiny changes
          </h1>
          <p className="mt-4 text-[#5C626D] text-2xl ">
            Level up your sleep game and crush your
          </p>
          <p className=" text-[#5C626D] text-2xl mb-6">
            {" "}
            daily goals with ease!
          </p>

          <div className="flex flex-col gap-8">
            <Link href="/welcome" className="bg-[#05B462] flex  justify-center items-center rounded-full  py-4 cursor-pointer text-white w-[200px]  font-semibold hover:bg-[#05b43feb]" >
              MONITOR MY SLEEP
            </Link>
            <button className=" rounded-full  py-4 cursor-pointer text-[#8992A4] font-semibold w-[200px] hover:bg-[#2A303C]">
              I HAVE AN ACCOUNT
            </button>
          </div>

          <div >
            <div className="flex mt-8 relative">
              <div className="w-[90px] h-[90px] rounded-full border border-[#5C626D]  bg-red-400"></div>
              <div className="w-[90px] h-[90px] rounded-full border border-[#5C626D]  absolute left-[70px] z-20 bg-green-400"></div>
              <div className="w-[90px] h-[90px] rounded-full border border-[#5C626D]  absolute left-[140px] z-20 bg-orange-400"></div>
              <div className="w-[90px] h-[90px] rounded-full border border-[#5C626D]  absolute left-[210px] z-20 bg-blue-400"></div>
              <div className="w-[90px] h-[90px] rounded-full border border-[#5C626D]  absolute left-[280px] z-20 bg-pink-400"></div>
            </div>
            <div>
              <div className="flex my-4">
                <FaStar style={{ color: "yellow", fontSize: "30px" }} />
                <FaStar style={{ color: "yellow", fontSize: "30px" }} />
                <FaStar style={{ color: "yellow", fontSize: "30px" }} />
                <FaStar style={{ color: "yellow", fontSize: "30px" }} />
                <FaRegStar style={{ color: "yellow", fontSize: "30px" }} />
              </div>
              <h2 className="text-white font-bold">4/5 from 20,000 users</h2>
            </div>
          </div>
        </div>

        <div>
          <div className="flex bg-[#2A303C] p-4 rounded-4xl justify-between md:w-[250px] w-full">
            <h1 className="text-3xl font-bold text-[#A6ADBA]">SLEEP</h1>
            <div className="w-[40px] h-[40px] border-3 border-[#A6ADBA] cursor-pointer "></div>
          </div>
        </div>
      </div>
    </div>
  );

}

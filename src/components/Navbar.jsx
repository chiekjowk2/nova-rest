import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="bg-[#2A303C] p-4 mt-4 sm:w-[576px] rounded-2xl w-full ">
        <div className="flex justify-between">
          <Link href="/" className="text-3xl cursor-pointer" >😴</Link>
          <h1 className="text-[#A6ADBA] text-3xl font-bold">Nova Rest</h1>
          <Link href="/" className="text-3xl cursor-pointer">😴</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar
import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className="flex p-5 w-full rounded-xl cursor-pointer hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} className="text-white" />
      <div className="flex flex-col ml-3">
        <span className="text-[#b7bac1]">Total Users</span>
        <span className="text-white font-bold">2,453</span>
        <span className="text-[#b7bac1]">
          <span className="text-lime-500">2.5%</span> more than the previous
          week
        </span>
      </div>
    </div>
  );
}

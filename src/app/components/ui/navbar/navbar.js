import {
  MdSearch,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
} from "react-icons/md";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-7 rounded-xl bg-[#182237]">
      <h1 className="text-[#b7bac1] font-bold">Dashboard</h1>
      <div className="flex gap-2.5 p-0 h-11 items-center">
        <div className="flex items-center p-2.5 rounded-xl bg-[#2e3742] gap-2.5 ">
          <MdSearch className="text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none border-0 text-white"
          ></input>
        </div>
        <div className="text-white">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}

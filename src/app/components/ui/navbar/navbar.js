import {
  MdSearch,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
} from "react-icons/md";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-7 rounded-xl custom-background-color">
      <h1 className="custom-text-color font-bold">Dashboard</h1>
      <div className="flex gap-2.5 p-0 h-11 items-center">
        <div className="flex items-center p-2.5 rounded-xl background-color-search-bar gap-2.5 ">
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
